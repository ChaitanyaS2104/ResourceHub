//GET user with a specific id
export async function GET(request, { params }) {
  const res = await params;
  return new Response(`GET user ${res.id}`);
}

//UPDATE user with a specific id
export async function PUT(request, { params }) {
  const res = await params;
  return new Response(`UPDATE user ${res.id}`);
}

//DELETE user with a specific id
export async function DELETE(request, { params }) {
  const res = await params;
  return new Response(`DELETE user ${res.id}`);
}
