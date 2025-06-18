import { connectToDB } from "@app/utils/database";
import ResourceBook from "@models/resource_book";

//Store new resource book
export const POST = async (req) => {
  const { title, description, category, resources, creator } = await req.json();
  try {
    await connectToDB();
    const newBook = new ResourceBook({
      title,
      description,
      category,
      resources,
      creator,
    });
    await newBook.save();
    return new Response(JSON.stringify(newBook), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify(error.message), { status: 400 });
  }
};
