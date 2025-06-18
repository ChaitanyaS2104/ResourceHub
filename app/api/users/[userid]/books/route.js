import { connectToDB } from "../../../../../utils/database";
import ResourceBook from "../../../../../models/resource_book";
import User from "../../../../../models/user"

//Get the resource book with user id
export const GET = async (request, { params }) => {
  const data = await params;
  const user = await data.userid;
  try {
    await connectToDB();
    const books = await ResourceBook.find({creator:user}).populate('creator');
    return new Response(JSON.stringify(books), {status: 200});
  } catch (error) {
    return new Response(`Error in fetching books of user ${user}: ${error}`);
  }
};
