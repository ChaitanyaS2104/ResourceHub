import { request } from "express";

//Get the resource with resource id
export async function GET(request, {params}) {
    const body = await params;
    const resId = body.resourceId;
    return new Response(`GET resource with id ${resId}`);
}

