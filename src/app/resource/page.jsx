"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import SingleResCard from "@app/components/SingleResCard";

const ResourceDetails = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const bookId = searchParams.get("id");
  const [book, setBook] = useState({
    title: "",
    description: "",
    category: [],
    collection: [],
    creator: {
      username: "",
      email: "",
      image: "/assets/images/user.png",
    },
  });

  const [resources, setResources] = useState([]);
  if (!bookId) return <div>Empty resource id</div>;

  const fetchResouces = async (all) => {
    // Fetch all resources in parallel
    const results = await Promise.all(
      all.map(async (res) => {
        const response = await fetch(`/api/resource/${res}`);
        return response.json();
      })
    );
    setResources(results); // Set once, no duplicates
  };

  useEffect(() => {
    const fetchBook = async () => {
      const res = await fetch(`/api/resource-book/${bookId}`);
      const data = await res.json();
      setBook(data);
      fetchResouces(data.resources);
    };
    fetchBook();
  }, []);

  useEffect(() => {
    console.log("Book data fetched:", book);
  }, [book]);

  return (
    <div className="mx-auto p-4 shadow-lg rounded-xl flex flex-col  items-center justify-center">
      <button
        className="mb-4 text-blue-600 hover:underline text-left w-full cursor-pointer"
        onClick={() => {
          router.push("/");
        }}
      >
        ← Back
      </button>

      <h1 className="text-3xl font-bold mb-2 text-left w-full">{book.title}</h1>

      <div className="mb-3 w-full">
        <div className="flex gap-2 mt-1 flex-wrap items-start">
          {book.category.map((cat) => (
            <span
              key={cat}
              className="text-xs bg-gray-200 px-2 py-0.5 rounded-full text-blue-700"
            >
              # {cat}
            </span>
          ))}
        </div>
      </div>

      <p className="text-gray-700 mb-5">{book.description}</p>

      <div className="mb-3 flex flex-col gap-3">
        {resources.map((res) => {
          return <SingleResCard key={res.res_name} res={res} />;
        })}
      </div>


      {book.collection?.length > 0 && (
        <div className="mb-3">
          <strong className="text-gray-600">Collections:</strong>
          <div className="flex gap-2 mt-1 flex-wrap">
            {book.collection.map((col) => (
              <span
                key={col}
                className="text-xs bg-purple-200 px-2 py-0.5 rounded-full text-purple-800"
              >
                📚 {col}
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="flex items-center gap-3 mt-4">
        <Image
          src={book.creator.image}
          alt="Creator Image"
          width={40}
          height={40}
          className="rounded-full object-cover"
        />
        <div>
          <h3 className="text-sm font-semibold">{book.creator.username}</h3>
          <p className="text-xs text-gray-500">{book.creator.email}</p>
        </div>
      </div>
    </div>
  );
};

export default ResourceDetails;
