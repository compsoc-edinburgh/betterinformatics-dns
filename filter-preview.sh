#!/bin/bash
# Small script to remove filler material from dnscontrol output (passed to stdin)
grep -v -e '^ *$' \
  -e '^Waiting for.*$' \
  -e '^CONCURRENTLY.*$' \
  -e '^SERIALLY.*$'
