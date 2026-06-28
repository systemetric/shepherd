#!/bin/sh
set -eu

: "${STAGING:=/var/patchtool/staging}"
: "${READY:=/var/patchtool/ready}"

echo "STAGING $STAGING"
echo "READY $READY"
echo

if [ ! -f "$READY" ]; then
    echo "NO PATCH"
    exit 1
fi

OLD_DIR=$(pwd)
cd "$STAGING"

echo "SIZE $(du -sb "$STAGING" | awk '{print $1}')"
[ -f ./NAME ] && echo "NAME $(cat ./NAME)"
[ -f ./VERSION ] && echo "VERSION $(cat ./VERSION)"
[ -f ./DESC ] && echo "DESCRIPTION $(cat ./DESC)"
[ -f ./APPLY ] && echo "CONTAINS APPLY SCRIPT"
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
[ -f ./VERSION ] && [ -f /home/pi/robot/robot/wrapper.py ] \
    && sed -i \
        "s/\(.*_logger.info(\"Patch Version:\).*/\1     $(cat ./VERSION)\"\)/" \
        /home/pi/robot/robot/wrapper.py
echo

cd "$OLD_DIR"
echo "DONE"
