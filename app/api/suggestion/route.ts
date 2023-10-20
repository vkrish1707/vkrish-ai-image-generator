export async function GET(request: Request) {
  try {
    const response = await fetch("https://ai-image-generator-vkrish.azurewebsites.net/api/getChatGPTSuggestion", {
      cache: "no-store",
    });

    if (!response.ok) {
      return new Response(`Azure Function returned: ${response.status}`, { status: response.status });
    }

    const textData = await response.text();
    return new Response(JSON.stringify(textData.trim()), {
      status: 200,
    });
  } catch (error) {
    console.error("Fetch failed:", error, JSON.stringify(error));
    return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
  }
}
