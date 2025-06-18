"use client";
import Profile from "../../components/Profile";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const page = () => {
  const [books, setBooks] = useState([]);
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    const fetchBook = async () => {
      const res = await fetch(`/api/users/${session?.user.id}/books`);
      const data = await res.json();
      setBooks(data);
    };
    if (session?.user.id) fetchBook();
  }, [session?.user.id]);

  const handleEdit = (book) => {
    router.push(`/update-book?id=${book._id}`);
  };
  const handleDelete = async (book) => {
    const hasConfirmed = confirm("Are you sure you want to delete this book?");
    if (hasConfirmed) {
      try {
        const ids = book.resources;
        const res = await fetch(`/api/resource-book/${book._id.toString()}`, {
          method: "DELETE",
        });

        if (res.ok) {
          const filtered_books = books.filter((b) => {
            b._id != book._id;
          });
          setBooks(filtered_books);
          router.push("/");
        }
      } catch (error) {
        console.log(error);
      }
    }
    return;
  };
  return (
    <Profile
      name="My Profile"
      desc="Welcome to your personalised profile page"
      data={books}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};

export default page;
