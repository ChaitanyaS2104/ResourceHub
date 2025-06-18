"use client";
import Profile from "../../../components/Profile";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";

const Page = () => {
  const [books, setBooks] = useState([]);
  const [user, setUser] = useState({});
  const params = useParams();
  const useremail = params.user;

  useEffect(() => {
    if (!useremail) return;

    const fetchUser = async () => {
      const res = await fetch(`/api/users/email/${useremail}`);
      const data = await res.json();
      setUser(data);
      console.log("Fetched user:", data);
    };

    fetchUser();
  }, [useremail]);

  useEffect(() => {
    if (!user || !user._id) return;
    const fetchBooks = async () => {
      const res = await fetch(`/api/users/${user._id}/books`);
      const data = await res.json();
      setBooks(data);
    };
    fetchBooks();
  }, [user]);

  return (
    <Profile
      name={user?.username || "User"}
      desc={`Welcome to ${
        user?.username || "user"
      }'s profile page — discover their interests, explore their collections, and see what they've been sharing.`}
      data={books}
    />
  );
};

export default Page;
