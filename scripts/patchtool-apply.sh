#!/bin/sh
set -eu

# clear sheep
echo -e "\e[2J"

if [ "$(id -u)" != "0" ]; then
    echo "patchtool-apply must be run as root"
    exit 1
fi

: "${STAGING:=/var/patchtool/staging}"
: "${WRAPPER:=/usr/local/bin/usercode.py}"

echo "STAGING $STAGING"

echo
echo "SIZE $(du -sb "$STAGING" | awk '{print $1}')"

OLD_DIR=$(pwd)
cd "$STAGING"

[ -f ./NAME ] && echo "NAME $(cat ./NAME)"
[ -f ./VERSION ] && echo "VERSION $(cat ./VERSION)"
[ -f ./DESC ] && echo "DESCRIPTION $(cat ./DESC)"
[ -f ./PRE_APPLY ] && echo "CONTAINS PRE-APPLY SCRIPT"

if [ -f ./PRE_APPLY ] && [ ! -x ./PRE_APPLY ]; then
    echo "PRE-APPLY SCRIPT NOT EXECUTABLE?"
    exit 1
fi

[ -f ./POST_APPLY ] && echo "CONTAINS POST-APPLY SCRIPT"

if [ -f ./POST_APPLY ] && [ ! -x ./POST_APPLY ]; then
    echo "POST-APPLY SCRIPT NOT EXECUTABLE?"
    exit 1
fi

echo
echo "CHECKSUMS"
sha256sum -c ./CHECKSUMS
echo

echo "FILE VALIDATION"

TMP_FILES=$(mktemp)
TMP_HASHES=$(mktemp)

trap 'rm -f "$TMP_FILES" "$TMP_HASHES"' EXIT

if [ -f ./EXCLUDE ]; then
    EXCL="-f ./EXCLUDE"
else
    EXCL=""
fi

find . -type f \
    | sed 's|^\./||' \
    | grep -v -F $EXCL \
    | sort > "$TMP_FILES"

awk '{print $2}' ./CHECKSUMS \
    | sed 's|^\./||' \
    | sort > "$TMP_HASHES"

diff -u "$TMP_FILES" "$TMP_HASHES" && echo "OK" || exit 1

echo
echo "PATCH OK"
echo
echo "APPLYING PATCH..."
echo

[ -f ./PRE_APPLY ] && echo "PRE-APPLY SCRIPT" && source ./PRE_APPLY && echo

echo "COPYING ROOT"

if [ -f ./EXCLUDE ]; then
    EXCL="--exclude-from=./EXCLUDE"
else
    EXCL=""
fi

tar -C "$STAGING" $EXCL -cvf - . | tar -C / -xpf -
echo

[ -f ./POST_APPLY ] && echo "POST-APPLY SCRIPT" && source ./POST_APPLY && echo

echo "MISC"
[ -f ./VERSION ] && [ -f "$WRAPPER" ] \
    && sed -i \
        "s/\(.*print(\"Patch Version:\).*/\1     $(cat ./VERSION)\"\)/" \
        "$WRAPPER"
echo

cd "$OLD_DIR"
echo "PATCH APPLIED"

rm -rf "$STAGING" || true
