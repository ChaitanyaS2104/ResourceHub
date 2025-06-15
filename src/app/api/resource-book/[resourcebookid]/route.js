import { connectToDB } from "@app/utils/database";
import Resource from "@models/resource";
import ResourceBook from "@models/resource_book";
import User from "@models/user";

//GET the resource with resource id
export const GET = async (request, { params }) => {
  const data = await params;
  const id = await data.resourcebookid;
  try {
    await connectToDB();
    const book = await ResourceBook.findById(id).populate("creator");
    if (!book)
      return new Response(JSON.stringify("Book not found"), { status: 404 });
    return new Response(JSON.stringify(book), { status: 200 });
  } catch (error) {
    return new Response(`Error in geting book of id ${id}: ${error}`);
  }
};

export const PATCH = async (req, { params }) => {
  const data = await params;
  const id = await data.resourcebookid;
  const { title, description, category, resources, fromCollection } =
    await req.json();
  try {
    await connectToDB();
    const existingbook = await ResourceBook.findById(id);
    if (!existingbook)
      return new Response(JSON.stringify("Book not found"), { status: 404 });
    existingbook.title = title;
    existingbook.description = description;
    existingbook.category = category;
    existingbook.resources = resources;
    existingbook.fromCollection = fromCollection;
    await existingbook.save();
    return new Response(JSON.stringify(existingbook), { status: 200 });
  } catch (error) {
    return new Response(`Error in updating book of id ${id}: ${error}`);
  }
};

export const DELETE = async (req, { params }) => {
  const data = await params;
  const bookid = await data.resourcebookid;

  try {
    await connectToDB();
    // Step 1: Find the resources and get the ids
    const book = await ResourceBook.findById(bookid);
    const res_ids = book.resources;
    console.log(res_ids);

    if (res_ids.length != 0) {
      // Step 2: Delete the resources
      await Resource.deleteMany({ _id: { $in: res_ids } });
    }

    // Step 3: Delete the book
    await ResourceBook.findByIdAndDelete(bookid);
    return new Response(JSON.stringify(book), { status: 200 });
  } catch (error) {
    return new Response(`Error in deleting book of id ${bookid}: ${error}`);
  }
};
