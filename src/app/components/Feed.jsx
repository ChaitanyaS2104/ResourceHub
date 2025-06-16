"use client";
import { useRouter } from "next/navigation";
import ResourceCard from "./ResourceCard";
import { useState, useEffect, useRef } from "react";

const ResourceCardList = ({ data, handleBookClick }) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((res_book) => {
        return (
          <ResourceCard
            key={res_book.title}
            res_book={res_book}
            handleBookClick={handleBookClick}
          />
        );
      })}
    </div>
  );
};

const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [books, setBooks] = useState([]);
  const searchTimeout = useRef(null);
  useEffect(() => {
    console.log(searchText);
  }, [searchText]);

  const fetchSearch = async (text) => {
    const res = await fetch(`/api/search/${text}`);
    if (!res.ok) return books
    const data = await res.json();
    return data;
  };
  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout.current);
    const value = e.target.value;
    setSearchText(value);
    if (value === "") {
      fetchBook();
      return;
    }
    searchTimeout.current = setTimeout(async () => {
      const searchResults = await fetchSearch(value);
      setBooks(searchResults);
    }, 500);
  };
  const router = useRouter();
  const fetchBook = async () => {
      const res = await fetch("/api/resource-book/");
      const data = await res.json();
      setBooks(data);
    };
  useEffect(() => {
    fetchBook();
  }, []);

  const handleBookClick = (book) => router.push(`/resource?id=${book}`);

  return (
    <section className="feed">
      <form action="" className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for resource book"
          value={searchText}
          onChange={(e) => {
            handleSearchChange(e);
          }}
          required
          className="search_input peer"
        />
      </form>
      <ResourceCardList data={books} handleBookClick={handleBookClick} />
    </section>
  );
};

export default Feed;
