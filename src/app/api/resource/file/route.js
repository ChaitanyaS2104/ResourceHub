//Post resource file
export async function POST(request) {
    const data = await request.json();
    const resource = {
        "message": "POST new resource file",
        "resource": data
    }
    //Do the logic of storing it 
    return new Response(JSON.stringify(resource), {status:200, headers:{"Content-Type":"application/json"}})
}