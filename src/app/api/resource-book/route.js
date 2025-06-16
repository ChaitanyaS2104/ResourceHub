import { connectToDB } from "@app/utils/database";
import ResourceBook from "@models/resource_book";

//Get all the resource-books
export const GET = async(req) => {
  try {
    await connectToDB();
    const books = await ResourceBook.find({}).sort({updatedAt: -1}).populate('creator');
    return new Response(JSON.stringify(books), {status: 200});
  } catch (error) {
    return new Response(`Failed to fetch all the books: ${error}`, {status: 500});
  }
};