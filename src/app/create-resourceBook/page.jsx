"use client";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Form from "@app/components/Form";
const CreateResoourceBook = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [book, setBook] = useState({
    title: "",
    description: "",
    category: [],
    resources: [],
  });

  const createbook = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch("/api/resource-book", {
        method: "POST",
        body: JSON.stringify({
          title: book.title,
          description: book.description,
          category: book.category,
          resources: book.resources,
          creator: session?.user.id,
        }),
      });

      if (res.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Form
      handleSubmit={createbook}
      book={book}
      setBook={setBook}
      submitting={submitting}
      btntype="Create"
    />
  );
};

export default CreateResoourceBook;


