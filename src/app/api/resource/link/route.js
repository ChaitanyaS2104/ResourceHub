//Post for resource link
export async function POST(request) {
    const data = await request.json();
    const resource = {
        "message": "POST new resource link",
        "resource": data
    }
    
    return new Response(JSON.stringify(resource), {status:200, headers:{"Content-Type":"application/json"}})
}