#!/bin/bash
RESPONSE=$(curl -s -X POST https://wispy-math-cb12.artemgromov629.workers.dev \
  -H "Content-Type: application/json" \
  -d "{\"message\": \"$1\"}")
echo "$RESPONSE" | jq -r '.text'
