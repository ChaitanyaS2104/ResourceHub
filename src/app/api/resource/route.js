import Resource from "@models/resource";

//Get all the resources
export async function GET(request) {
  return new Response("GET all the resources");
}

export async function POST(request) {
  try {
    const body = await request.json();
    console.log("Received body:", body);

    const res = await Resource.create(body);

    return new Response(
      JSON.stringify({ message: "Resource created successfully", id: res._id }),
      {
        status: 201,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("POST error:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 400,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}

