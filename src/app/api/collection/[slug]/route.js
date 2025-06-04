export async function GET(_req, { params }) {
  const data = await params;
  const slug = data.slug;
  if (slug.startsWith("collection-"))
    return new Response(`It's a collection with ID ${slug}`);
  if (slug.startsWith("category-"))
    return new Response(`It's a collection by category ${slug}`);
  return new Response("Unknown type");
}

export async function DELETE(_req, { params }) {
  const data = await params;
  const slug = data.slug;
  if (slug.startsWith("collection-")) {
    const collectionId = slug.replace("collection-", "");
    return new Response(`Deleted collection with ID: ${collectionId}`, { status: 200 });
  }
  return new Response("Invalid collction ID for deletion", { status: 400 });
}

export async function PUT(req, { params }) {
  const data = await params;
  const slug = data.slug;
  if (slug.startsWith("collection-")) {
    const collectionId = slug.replace("collection-", "");
    return new Response(`Updated collection with ID: ${collectionId}`, { status: 200 });
  }
  return new Response("Invalid collection ID for update", { status: 400 });
}
