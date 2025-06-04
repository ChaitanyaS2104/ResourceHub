//Get all the resource-books of type
export async function GET(request, {params}) {
    const body = await params;
    const {slug, type} = body;
    if(slug.startsWith("bookid-"))
        return new Response(`GET all the resources of book ${slug} & of type ${type}`);
    return new Response ("Invalid bookId");
}