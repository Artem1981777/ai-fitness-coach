export default {
  async fetch(request, env) {
    // Разрешаем CORS, чтобы можно было обращаться к агенту с любого сайта
    const corsHeaders = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    };

    if (request.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

    try {
      let userInput = "Give me a quick workout tip.";
      
      // Если это POST запрос, берем вопрос из тела запроса
      if (request.method === "POST") {
        const body = await request.json();
        userInput = body.message || userInput;
      }

      const tasks = [
        { role: "system", content: "You are Iron Terminal Coach, a professional fitness assistant. You provide concise, brutal, but effective workout advice. Keep it terminal-style." },
        { role: "user", content: userInput }
      ];

      const response = await env.AI.run('@cf/meta/llama-3-8b-instruct', { messages: tasks });
      
      return new Response(JSON.stringify({ status: "success", advice: response }), {
        headers: { ...corsHeaders, "content-type": "application/json" },
      });
    } catch (e) {
      return new Response(JSON.stringify({ status: "error", message: e.message }), { 
        status: 500, 
        headers: corsHeaders 
      });
    }
  }
};
