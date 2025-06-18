export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get("url");
  if (!url) {
    return new Response(JSON.stringify({ error: "Missing url parameter" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const apiKey = process.env.LINK_VIEW_API;
  const apiUrl = `https://api.linkpreview.net/?q=${encodeURIComponent(url)}`;

  try {
    const response = await fetch(apiUrl, {
      headers: {
        "X-Linkpreview-Api-Key": apiKey,
      },
    });
    const data = await response.json();
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: "Failed to fetch preview" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}