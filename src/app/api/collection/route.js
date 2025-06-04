//Get all the collection
export async function GET(request) {
    return new Response('GET all the collections')
}

//Post collection
export async function POST(request) {
    const data = await request.json();
    const collection = {
        "message": "POST new collection",
        "collection": data
    }
    return new Response(JSON.stringify(collection), {status:200, headers:{"Content-Type":"application/json"}})
}