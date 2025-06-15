import { connectToDB } from "@app/utils/database";
import ResourceBook from "@models/resource_book";

export const POST = async (req) => {
  const { title, description, category, resources, fromCollection, creator } = await req.json();

  try {
    await connectToDB();

    //Create new book 
    const newBook = new ResourceBook({
      title,
      description,
      category,
      resources,
      fromCollection,
      creator,
    });

    await newBook.save();
    //Add to collection if specified



    return new Response(JSON.stringify(newBook), { status: 201 });
  } catch (error) {
        return new Response(JSON.stringify(error.message), {status: 400,});
  }
};
