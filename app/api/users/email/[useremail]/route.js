import { connectToDB } from "@utils/database";
import User from "@models/user"

//Get the user id from the email
export const GET = async (request, { params }) => {
  const data = await params;
  const useremail = await data.useremail;
  try {
    await connectToDB();
    const user = await User.findOne({email: useremail });
    return new Response(JSON.stringify(user), {status: 200});
  } catch (error) {
    return new Response(`Error in fetching details of user ${error}`);
  }
};
