#!/bin/sh
set -eu

if [ "$(id -u)" != "0" ]; then
    echo "patchtool-verify must be run as root"
    exit 1
fi

: "${STAGING:=/var/patchtool/staging}"
: "${READY:=/var/patchtool/ready}"

rm -f "$READY"

echo "STAGING $STAGING"
echo "READY $READY"

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

cd "$OLD_DIR"
touch "$READY"
echo "PATCH OK"
