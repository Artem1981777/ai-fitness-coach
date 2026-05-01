#!/bin/bash
API_URL="https://wispy-math-cb12.artemgromov629.workers.dev"
echo -e "\033[0;34mГенерация аналитики...\033[0m"
RESPONSE=$(curl -s -X POST $API_URL -H "Content-Type: application/json" -d '{"message": "ПРОАНАЛИЗИРУЙ МОЙ ПРОГРЕСС"}')
echo "--------------------------------------------------"
echo "$RESPONSE" | jq -r '.text'
echo "--------------------------------------------------"
