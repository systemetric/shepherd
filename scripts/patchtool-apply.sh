#!/bin/sh
set -eu

if [ "$(id -u)" != "0" ]; then
    echo "patchtool-apply must be run as root"
    exit 1
fi

: "${STAGING:=/var/patchtool/staging}"
: "${WRAPPER:=/home/pi/robot/robot/wrapper.py}"

echo "STAGING $STAGING"

echo
echo "SIZE $(du -sb "$STAGING" | awk '{print $1}')"

OLD_DIR=$(pwd)
cd "$STAGING"

[ -f ./NAME ] && echo "NAME $(cat ./NAME)"
[ -f ./VERSION ] && echo "VERSION $(cat ./VERSION)"
[ -f ./DESC ] && echo "DESCRIPTION $(cat ./DESC)"
[ -f ./APPLY ] && echo "CONTAINS APPLY SCRIPT"

if [ -f ./APPLY ] && [ ! -x ./APPLY ]; then
    echo "APPLY SCRIPT NOT EXECUTABLE?"
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
echo "Ready to apply patch..."
echo

echo "COPYING ROOT"

if [ -f ./EXCLUDE ]; then
    EXCL="--exclude-from=./EXCLUDE"
else
    EXCL=""
fi

tar -cvf - $EXCL "$STAGING" | tar -xpf - -C /
echo

[ -f ./APPLY ] && echo "APPLY SCRIPT" && source ./APPLY && echo

echo "MISC"
[ -f ./VERSION ] && [ -f "$WRAPPER" ] \
    && sed -i \
        "s/\(.*_logger.info(\"Patch Version:\).*/\1     $(cat ./VERSION)\"\)/" \
        "$WRAPPER"
echo

cd "$OLD_DIR"
echo "PATCH APPLIED"
