"use client";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";

const ResourceCard = ({
  res_book,
  handleEdit,
  handleDelete,
  handleTagClick,
  handleUsernameClick,
}) => {
  const { data: session } = useSession();
  const pathName = usePathname();
  const router = useRouter();
  const handleBookClick = (book) => router.push(`/resource?id=${book}`);
  return (
    <div className="prompt_card flex flex-col gap-4 my-3">
      <div className="border-b-1 border-[#c7c7c7]">
        <h2 className="font-satoshi font-semibold text-gray-900 my-3 text-2xl">
          {res_book.title}
        </h2>
        <p className="my-3 font-satoshi text-sm text-gray-700 ">
          {res_book.description}
        </p>
        <button
          className="text-sm text-blue-500 text-right w-full cursor-pointer"
          onClick={() => handleBookClick(res_book._id)}
        >
          more
        </button>
      </div>
      <div className="flex gap-1.5">
        {res_book.category.map((category) => (
          <div
            className="text-xs rounded-full px-3 py-0.5 bg-gray-200 cursor-pointer"
            key={category}
            onClick={() => handleTagClick(category)}
          >
            <span className="blue_gradient"># {category}</span>
          </div>
        ))}
      </div>

      <div
        className="flex-1 flex justify-start items-center gap-3 cursor-pointer"
        onClick={() => handleUsernameClick(res_book.creator.email)}
      >
        <Image
          src={res_book.creator.image}
          alt="user image"
          width={30}
          height={30}
          className="rounded-full object-contain"
        />
        <div className="flex flex-col">
          <h3 className="font-satoshi font-semibold text-gray-900 text-sm">
            {res_book.creator.username}
          </h3>
          <p className="font-inter text-xs text-gray-500">
            {res_book.creator.email}
          </p>
        </div>
      </div>

      {session?.user.id == res_book.creator._id && pathName === "/profile" && (
        <div className="mt-5 flex-center gap-4 border-t border-gray-100 pt-3">
          <p
            className="font-inter text-sm green_gradient cursor-pointer"
            onClick={handleEdit}
          >
            Edit
          </p>
          <p
            className="font-inter text-sm orange_gradient cursor-pointer"
            onClick={handleDelete}
          >
            Delete
          </p>
        </div>
      )}
    </div>
  );
};

export default ResourceCard;
