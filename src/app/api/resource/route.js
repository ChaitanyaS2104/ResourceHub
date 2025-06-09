import { connectToDB } from "@app/utils/database";
import Resource from "@models/resource";

//Get all the resources
export async function GET(request) {
  return new Response("GET all the resources");
}

export const POST = async (req) => {
  const { res_name, res_link, description, res_owner, res_type } =
    await req.json();

  try {
    await connectToDB();
    const newResource = new Resource({
      res_name,
      res_link,
      description,
      res_owner,
      res_type,
    });

    await newResource.save();

    return new Response(JSON.stringify(newResource), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify(error.message), {status: 400,});
  }
};
