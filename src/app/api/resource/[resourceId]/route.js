//Get the resource with resource id
export async function GET(request, {params}) {
    const body = await params;
    const resId = body.resourceId;
    return new Response(`GET resource with id ${resId}`);
}

//Update the resource with resource id
export async function PUT(request, {params}) {
    const body = await params;
    const resId = body.resourceId;
    return new Response(`PUT resource with id ${resId}`);
}
//Delete the resource with resource id
export async function DELETE(request, {params}) {
    const body = await params;
    const resId = body.resourceId;
    return new Response(`DELETE resource with id ${resId}`);
}