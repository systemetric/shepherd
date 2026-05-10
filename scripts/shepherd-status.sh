#!/bin/sh
set -e

if [ "$#" -lt 2 ]; then
    echo "usage: $0 <service id> <program> [args] ..."
    exit 1
fi

: "${MIDGE:=/usr/local/bin/midge}"
: "${ADDR:=0.0.0.0:1883}"

SERVICE_ID="$1"
PROGRAM="$2"

shift
shift

send_online() {
    printf "{\"service\":\"$SERVICE_ID\",\"status\":\"online\"}\n" \
        | $MIDGE -a "$ADDR" "$SERVICE_ID" "$SERVICE_ID/status"
}

send_offline() {
    printf "{\"service\":\"$SERVICE_ID\",\"status\":\"offline\"}\n" \
        | $MIDGE -a "$ADDR" "$SERVICE_ID" "$SERVICE_ID/status"
}

trap send_offline EXIT INT TERM HUP

send_online

$PROGRAM $@
