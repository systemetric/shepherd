#!/usr/bin/env bash
find dist -type f -name '*.html' ! -path '*/_astro/*' -exec sed -E -i 's|href="/(docs/)?|href="/docs/|g' {} +
