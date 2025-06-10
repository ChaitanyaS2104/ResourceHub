"use client";
import ResourceCard from "./ResourceCard";
import { useState, useEffect } from "react";

const ResourceCardList = ({ data, handleBookClick }) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((res_book) => {
        return (<ResourceCard
          key={res_book.title}
          res_book={res_book}
          handleBookClick={handleBookClick}
        />);
      })}
    </div>
  );
};

const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [books, setBooks] = useState([]);
  const handleSearchChange = () => {};

  useEffect(() => {
    const fetchBook = async () => {
      const res = await fetch("/api/resource-book/");
      const data = await res.json();
      setBooks(data);
    };
    fetchBook();
  }, []);

  return (
    <section className="feed">
      <form action="" className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for resource book"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>
      <ResourceCardList data={books} handleBookClick={() => {}} />
    </section>
  );
};

export default Feed;
