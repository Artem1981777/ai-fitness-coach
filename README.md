# 🏋️ Iron Terminal Coach

**Autonomous AI Fitness Agent** running on Cloudflare Workers & Llama 3. Built entirely via Termux.

## 🤖 Structured Intelligence
The agent doesn't just chat; it processes data into structured insights:
```json
{
  "user_intent": "workout_request",
  "focus_muscles": ["legs", "back"],
  "calculated_volume": "112.5kg total",
  "progression": "+5% from last session",
  "status": "ready_to_generate"
}
```

## 🛠 Quick Deployment
1. **Telegram**: Create a bot via @BotFather.
2. **Cloudflare KV**: 
   - Create namespace: `npx wrangler kv:namespace create USER_DATA`
   - Add ID to `wrangler.toml`.
3. **Secrets**: `npx wrangler secret put TELEGRAM_BOT_TOKEN`
4. **Deploy**: `npx wrangler deploy`

## 🗺 Roadmap
- [x] Core AI Logic (Llama 3 integration)
- [x] State Management (Cloudflare KV)
- [x] Workout Analysis Engine
- [x] Terminal-ready UI (Markdown)
- [ ] Adaptive Weight Progression (Auto 1RM)
- [ ] Export to PDF via Agent

## Project Preview
![Iron Terminal Bot Demo](demo.jpg)
