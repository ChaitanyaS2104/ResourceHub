import { connectToDB } from "@app/utils/database";
import Resource from "@models/resource";

//Get all the resources
export async function GET(request, { params }) {
  const data = await params;
  const id = await data.resourceId;
  try {
    await connectToDB();
    const resource = await Resource.findById(id);
    return new Response(JSON.stringify(resource), {status: 200});
  } catch (error) {
    return new Response(`Error fetching resource ${error}`, {status: 500});
  }
}

