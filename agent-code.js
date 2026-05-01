export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === "/chat" && request.method === "POST") {
      try {
        const { message } = await request.json();
        const response = await env.AI.run('@cf/meta/llama-3-8b-instruct', {
          messages: [
            { role: 'system', content: 'You are a pro running coach. Give short advice.' },
            { role: 'user', content: message }
          ]
        });
        return new Response(JSON.stringify({ text: response.response }), {
          headers: { "Content-Type": "application/json" }
        });
      } catch (e) {
        return new Response(JSON.stringify({ error: e.message }), { status: 500 });
      }
    }
    return new Response("Agent online. Use POST /chat with {message: '...'}");
  }
};
