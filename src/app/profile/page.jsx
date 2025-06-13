"use client";
import Profile from "@app/components/Profile";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const page = () => {
  const [books, setBooks] = useState([]);
  const { data: session } = useSession();

  useEffect(() => {
    const fetchBook = async () => {
      const res = await fetch(`/api/resource-book/${session?.user.id}/user`);
      const data = await res.json();
      setBooks(data);
    };
    if(session?.user.id) fetchBook();
  }, [session?.user.id]);

  const handleEdit = () => {};
  const handleDelete = () => {};
  return (
    <Profile
      name="My"
      desc="Welcome to your personalised profile page"
      data={books}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};

export default page;
