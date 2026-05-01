#!/bin/bash
API_URL="https://wispy-math-cb12.artemgromov629.workers.dev"
GREEN='\033[0;32m'
NC='\033[0m'

echo -e "${GREEN}--- ТЕКУЩИЙ СТАТУС ПРОЕКТА --- ${NC}"
RESPONSE=$(curl -s -X POST $API_URL \
  -H "Content-Type: application/json" \
  -d '{"message": "ПОКАЖИ МОЙ ПРОФИЛЬ"}')

echo "$RESPONSE" | jq -r '.text'
echo "------------------------------"
