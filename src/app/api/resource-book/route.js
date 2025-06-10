import { connectToDB } from "@app/utils/database";
import ResourceBook from "@models/resource_book";

//Get all the resource-books
export const GET = async(req) => {
  try {
    await connectToDB();
    const books = await ResourceBook.find({}).populate('creator');
    return new Response(JSON.stringify(books), {status: 200});
  } catch (error) {
    return new Response(`Failed to fetch all the books: ${error}`, {status: 500});
  }
};

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
        return new Response(JSON.stringify(error.message), {status: 400,});
  }
};
