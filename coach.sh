#!/bin/bash
API_URL="https://wispy-math-cb12.artemgromov629.workers.dev"
echo -e "\033[0;36m=== ЧАТ С ТРЕНЕРОМ (пиши 'exit' для выхода) ===\033[0m"
while true; do
    echo -ne "\033[1mВы: \033[0m"
    read USER_INPUT
    if [[ "$USER_INPUT" == "exit" ]]; then break; fi
    RESPONSE=$(curl -s -X POST $API_URL -H "Content-Type: application/json" -d "{\"message\": \"$USER_INPUT\"}")
    echo -e "\033[0;32mТренер:\033[0m $(echo "$RESPONSE" | jq -r '.text')\n"
done
