#!/bin/sh
set -eu

: "${STAGING:=/var/patchtool/staging}"
: "${READY:=/var/patchtool/ready}"

echo "STAGING $STAGING"
echo "READY $READY"

rm -rf "$STAGING"
rm -f "$READY"
