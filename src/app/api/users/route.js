//Get all the users
export async function GET(request) {
  return new Response("GET all the users");
}

//Create a new user
export async function POST(request) {
  const body = await request.json();
  const resBody = {
    message: "Create new user",
    user: body,
  };
  return new Response(JSON.stringify(resBody), {
    status: 201,
    headers: { "Content-Type": "application/json" },
  });
}
