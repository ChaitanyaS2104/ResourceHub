import { connectToDB } from "../../../../utils/database";
import Resource from "../../../../models/resource";

//Get all the resources
export const GET = async (request, { params }) => {
  const data = await params;
  const id = await data.resourceId;
  try {
    await connectToDB();
    const resource = await Resource.findById(id);
    return new Response(JSON.stringify(resource), { status: 200 });
  } catch (error) {
    return new Response(`Error fetching resource ${error}`, { status: 500 });
  }
};

export const DELETE = async (request, {params}) => {
  const data = await params;
  const id = await data.resourceId;
  try {
    await connectToDB();
    await Resource.findByIdAndDelete(id);
    return new Response(JSON.stringify("Deleted resource"), { status: 200 });
  } catch (error) {
    return new Response(`Error deleting resource ${error}`, { status: 500 });
  }
};
