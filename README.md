# ⚡ Iron Terminal: AI Fitness Coach

## 🏗 Architecture (Edge AI)
* **Live Demo:** [t.me/IronTerminal_Coach_bot](https://t.me/IronTerminal_Coach_bot)

```text
[ User (Termux) ] <---> [ Cloudflare Workers ] <---> [ Meta Llama 3 ]
                              |
                       [ Cloudflare KV ] (Fast Global Storage)
```

An intelligent CLI-based workout management system powered by Edge Computing and LLMs.

## 💡 Why It Matters
Traditional fitness apps are bloated, slow, and privacy-invasive. **Iron Terminal** brings professional coaching to the fastest environment possible: the command line. It’s designed for those who value speed, data ownership, and edge computing efficiency.

## 🚀 Tech Stack
* **Core:** Cloudflare Workers (Serverless Architecture)
* **Intelligence:** Meta Llama 3 (via Cloudflare AI)
* **Storage:** Cloudflare KV (Persistent State)
* **Interface:** Bash CLI / Interactive Terminal

## 🛠 Features
* **Structured Intelligence:** Uses JSON Mode for precise workout data extraction.
* **Multilingual AI:** Automatically detects and responds in your language (English, Russian, etc.).
* **Smart Context:** The coach remembers your name, goals, and workout history.
* **Expert Analytics:** Generates science-based progress reports via `./report.sh`.

## 📈 Roadmap
1. **Advanced TUI:** Python-based terminal interface with progress visualization.
2. **Local AI Backup:** Integration with Ollama for offline-first capabilities.
3. **Long-term Memory:** Vector database integration for multi-month context.

## 💻 Quick Start
1. Clone the repository.
2. Configure your API URL in the scripts.
3. Run `./coach.sh`.

## ⚙️ Setup & Deployment
1. **Cloudflare Worker:** Deploy `agent-code.js` to Cloudflare Workers.
2. **KV Storage:** Create a KV namespace named `KV` and bind it to your worker.
3. **Environment:** Set your Worker URL in `coach.sh` and `report.sh`.
4. **Run:** Execute `chmod +x *.sh` and start with `./coach.sh`.

## Project Preview
![Iron Terminal Bot Demo](demo.jpg)
