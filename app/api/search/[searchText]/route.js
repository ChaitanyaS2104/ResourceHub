import { connectToDB } from "../../../../utils/database";
import ResourceBook from "../../../../models/resource_book";
import User from "../../../../models/user";

export const GET = async (req, { params }) => {
  const searchText = params.searchText;
  try {
    await connectToDB();
    // 1. Find books by title, description, category
    const booksByFields = await ResourceBook.find({
      $or: [
        { title: { $regex: searchText, $options: "i" } },
        { description: { $regex: searchText, $options: "i" } },
        { category: { $in: [new RegExp(searchText, "i")] } }, // <-- new line added
      ],
    }).populate("creator");
    // 2. Find users whose username matches
    const users = await User.find({
      username: { $regex: searchText, $options: "i" },
    });
    // 3. Find books by those users
    let booksByUser = [];
    if (users.length > 0) {
      const userIds = users.map((u) => u._id);
      booksByUser = await ResourceBook.find({
        creator: { $in: userIds },
      }).populate("creator");
    }
    // 4. Merge and deduplicate
    const allBooks = [...booksByFields, ...booksByUser];
    const uniqueBooks = Array.from(
      new Map(allBooks.map((book) => [book._id.toString(), book])).values()
    );
    return new Response(JSON.stringify(uniqueBooks), { status: 200 });
  } catch (error) {
    return new Response(`Error in searching ${error}`, { status: 500 });
  }
};
