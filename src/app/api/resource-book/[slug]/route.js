export async function GET(_req, { params }) {
  const data = await params;
  const slug = data.slug;
  if (slug.startsWith("bookid-"))
    return new Response(`It's a book with ID ${slug}`);
  if (slug.startsWith("collection-"))
    return new Response(`It's a book in collection ${slug}`);
  if (slug.startsWith("category-"))
    return new Response(`It's a book in category ${slug}`);
  return new Response("Unknown type");
}

export async function DELETE(_req, { params }) {
  const data = await params;
  const slug = data.slug;
  if (slug.startsWith("bookid-")) {
    const bookId = slug.replace("bookid-", "");
    return new Response(`Deleted book with ID: ${bookId}`, { status: 200 });
  }
  return new Response("Invalid ID for deletion", { status: 400 });
}

export async function PUT(req, { params }) {
  const data = await params;
  const slug = data.slug;
  if (slug.startsWith("bookid-")) {
    const bookId = slug.replace("bookid-", "");
    const body = await req.json();
    return new Response(`Updated book with ID: ${bookId}`, { status: 200 });
  }
  return new Response("Invalid ID for update", { status: 400 });
}
