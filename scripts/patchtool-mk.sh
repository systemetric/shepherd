#!/bin/sh
set -eu

if [ "$#" -ne 2 ]; then
    echo "usage: patchtool-mk <src> <out>"
    exit 1
fi

SRC=$(realpath "$1")
OUT=$(realpath "$2")

if [ ! -d "$SRC" ]; then
    echo "src must be a directory"
    exit 1
fi

echo "SRC $SRC"
echo "OUT $OUT"

OLD_DIR=$(pwd)
cd "$SRC"

echo
echo "SIZE $(du -sb "$SRC" | awk '{print $1}')"
[ -f ./NAME ] && echo "NAME $(cat ./NAME)"
[ -f ./VERSION ] && echo "VERSION $(cat ./VERSION)"
[ -f ./DESC ] && echo "DESCRIPTION $(cat ./DESC)"
[ -f ./APPLY ] && echo "CONTAINS APPLY SCRIPT"

if [ -f ./EXCLUDE ]; then
    EXCL="-f ./EXCLUDE"
else
    EXCL=""
fi

find . -type f \
    | sed 's|^\./||' \
    | sort \
    | grep -v -F $EXCL \
    | while read -r f; do
        sha256sum "$f"
    done > ./CHECKSUMS

if [ -f "$OUT" ]; then
    rm -f "$OUT"
fi

zip -r "$OUT" .
cd "$OLD_DIR"
echo
echo "DONE"
