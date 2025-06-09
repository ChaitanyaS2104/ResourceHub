import { connectToDB } from "@app/utils/database";
import ResourceBook from "@models/resource_book";

//Get all the resource-books
export async function GET(request) {
  return new Response("GET all the favourite resource books");
}

export const POST = async (req) => {
  const { title, description, category, resources } = await req.json();

  try {
    await connectToDB();
    const newBook = new ResourceBook({
      title,
      description,
      category,
      resources,
    });

    await newBook.save();

    return new Response(JSON.stringify(newBook), { status: 201 });
  } catch (error) {
        return new Response(JSON.stringify(error.message), {status: 400,});
  }
};
