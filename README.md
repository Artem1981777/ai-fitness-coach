# ⚡ Iron Terminal: AI Fitness Coach

An intelligent CLI-based workout management system powered by Edge Computing and LLMs.

## 🚀 Tech Stack
* **Core:** Cloudflare Workers (Serverless Architecture)
* **Intelligence:** Meta Llama 3 (via Cloudflare AI)
* **Storage:** Cloudflare KV (Persistent State)
* **Interface:** Bash CLI / Interactive Terminal

## 🛠 Features
* **Multilingual AI:** Automatically detects and responds in your language (English, Russian, etc.).
* **Interactive Chat:** Seamless coaching experience via `./coach.sh`.
* **Smart Context:** The coach remembers your name, goals, and workout history.
* **Auto-Logging:** Recognizes workout metrics (km, kg, reps) and saves them to the cloud.
* **Expert Analytics:** Generates science-based progress reports via `./report.sh`.

## 📈 Roadmap
1. **Structured Logging:** Transition to JSON schemas for precise metric tracking.
2. **Local AI Backup:** Integration with Ollama for offline-first capabilities.
3. **Advanced TUI:** Python-based terminal interface with progress visualization.
4. **Long-term Memory:** Vector database integration for multi-month context.

## 💻 Quick Start
1. Clone the repository.
2. Configure your API URL in the scripts.
3. Run `./coach.sh`.
