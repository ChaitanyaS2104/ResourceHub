"use client";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";

const ResourceCard = ({ res_book, handleBookClick }) => {
  return (
    <div className="prompt_card flex flex-col gap-4 my-3">
      <div className="border-b-1 border-[#c7c7c7]">
        <h2 className="font-satoshi font-semibold text-gray-900 my-3 text-2xl">
          {res_book.title}
        </h2>
        <p className="my-3 font-satoshi text-sm text-gray-700 ">
          {res_book.description}
        </p>
      </div>
      <div className="flex gap-1.5">
        {res_book.category.map((category) => (
          <div className="text-xs rounded-full px-3 py-0.5 bg-gray-200" key={category}>
            <span className="blue_gradient"># {category}</span>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-start gap-5">
        <div className="flex-1 flex justify-start items-center gap-3 cursor-pointer">
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
      </div>
    </div>
  );
};

export default ResourceCard;
