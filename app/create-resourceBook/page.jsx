"use client";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Form from "@components/Form";
const CreateResoourceBook = () => {
  //Array to store all the resource data until form is submitted for showing
  const [all_resources, setAll_resources] = useState([]);

  const { data: session, status } = useSession();
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [book, setBook] = useState({
    title: "",
    description: "",
    category: [],
    resources: [],
  });

  const postResource = async (all) => {
    const ids = await Promise.all(
      all.map(async (res) => {
        const response = await fetch("/api/resource/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            res_name: res.res_name,
            res_link: res.res_link,
            description: res.description,
            res_owner: res.res_owner,
            res_type: res.res_type,
          }),
        });
        const data = await response.json();
        return data._id;
      })
    );
    return ids;
  };

  const createbook = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const ids = await postResource(all_resources);
      const res = await fetch("/api/resource-book/new", {
        method: "POST",
        body: JSON.stringify({
          title: book.title,
          description: book.description,
          category: book.category,
          resources: ids,
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
      all_resources={all_resources}
      setAll_resources={setAll_resources}
    />
  );
};

export default CreateResoourceBook;
