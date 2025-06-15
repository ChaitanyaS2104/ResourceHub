"use client";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import Form from "@app/components/Form";
const EditResourceBook = () => {
  //Array to store all the resource data until form is submitted for showing
  const [all_resources, setAll_resources] = useState([]);
  const searchParams = useSearchParams();
  const bookId = searchParams.get("id");
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [book, setBook] = useState({
    title: "",
    description: "",
    category: [],
    resources: [],
    fromCollection: "",
  });

  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    const getBookDetails = async () => {
      const response = await fetch(`api/resource-book/${bookId}`);
      const data = await response.json();
      setBook({
      title: data.title,
      description: data.description,
      category: data.category,
      resources: data.ids,
      fromCollection: data.fromCollection,
    });
    setIsEdit(true);
    };

    if(bookId) getBookDetails();
  }, [bookId]);

  useEffect(()=>{
    console.log(book)
  }, [book])

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

  const updateBook = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    if(!bookId) return alert("Book id not found")
    try {
      const ids = await postResource(all_resources);
      const res = await fetch(`/api/resource-book/${bookId}`, {
        method: "PATCH",
        body: JSON.stringify({
          title: book.title,
          description: book.description,
          category: book.category,
          resources: ids,
          fromCollection: book.collection,
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
      handleSubmit={updateBook}
      book={book}
      setBook={setBook}
      submitting={submitting}
      btntype="Edit"
      all_resources={all_resources}
      setAll_resources={setAll_resources}
      isEdit={isEdit}
    />
  );
};

export default EditResourceBook;
