# AI Fitness Coach (Termux + Cloudflare Edge)

Интеллектуальная система управления тренировками.

### Технологии:
* **Backend:** Cloudflare Workers (Serverless)
* **AI Model:** Meta Llama 3 (via Cloudflare AI)
* **Database:** Cloudflare KV (Persistent Storage)
* **Interface:** Bash CLI (Termux)

### Функции:
1. **Chat:** Общение с тренером в реальном времени.
2. **Persistence:** Сохранение целей и логов тренировок в облаке.
3. **Analytics:** Автоматический анализ прогресса на основе данных в базе.

### Использование:
* `./chat.sh "сообщение"` — общение.
* `./status.sh` — текущий профиль из базы.
* `./report.sh` — аналитический отчет.
