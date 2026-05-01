export default {
  async fetch(request, env) {
    const tasks = [
      { role: "system", content: "You are Iron Terminal Coach, a professional fitness assistant. You provide concise, brutal, but effective workout advice. Keep it terminal-style." },
      { role: "user", content: "Give me a quick 5-minute HIIT workout plan." }
    ];

    // Пример вызова Cloudflare AI (Llama-3)
    try {
      const response = await env.AI.run('@cf/meta/llama-3-8b-instruct', { messages: tasks });
      return new Response(JSON.stringify(response), {
        headers: { "content-type": "application/json" },
      });
    } catch (e) {
      return new Response("Iron Terminal Coach is resting. Error: " + e.message, { status: 500 });
    }
  }
};
