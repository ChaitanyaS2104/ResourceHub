"use client";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import Form from "@app/components/Form";
const EditResourceBook = () => {
  //Array to store all the resource data until form is submitted for showing
  const [all_resources, setAll_resources] = useState([]);

  //To delete prev resources
  const [originalResourceIds, setOriginalResourceIds] = useState([]);
  const searchParams = useSearchParams();
  const bookId = searchParams.get("id");
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [book, setBook] = useState({
    title: "",
    description: "",
    category: [],
    resources: [],
    fromCollection: [],
  });
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    const getBookDetails = async () => {
      const response = await fetch(`/api/resource-book/${bookId}`);
      const data = await response.json();
      setBook({
        title: data.title,
        description: data.description,
        category: data.category,
        resources: data.resources,
        fromCollection: data.fromCollection,
      });
      setOriginalResourceIds(data.resources);
      setIsEdit(true);
    };
    if (bookId) getBookDetails();
  }, [bookId]);

  useEffect(() => {
    const getResources = async () => {
      try {
        const resources = await Promise.all(
          book.resources.map(async (resId) => {
            const response = await fetch(`/api/resource/${resId}`);
            const data = await response.json();
            return data;
          })
        );
        setAll_resources(resources);
      } catch (error) {
        console.error("Error fetching resources:", error);
      }
    };
    getResources();
  }, [book.resources]);

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
    if (!bookId) return alert("Book id not found");

    try {
      //Removed previous resources
      const removedResourceIds = originalResourceIds.filter(
        (id) => !all_resources.some((res) => res._id === id)
      );
      await deleteResources(removedResourceIds);

      // Separate new and existing resources
      const newResources = all_resources.filter((res) => !res._id);
      const existingResources = all_resources.filter((res) => res._id);

      const newIds = await postResource(newResources);
      // Combine existing and newly created resource IDs
      const finalIds = [...existingResources.map((res) => res._id), ...newIds];
      const res = await fetch(`/api/resource-book/${bookId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: book.title,
          description: book.description,
          category: book.category,
          resources: finalIds,
          fromCollection: book.fromCollection,
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

  const deleteResources = async (ids) => {
    await Promise.all(
      ids.map(async (id) => {
        await fetch(`/api/resource/${id}`, {
          method: "DELETE",
        });
      })
    );
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
