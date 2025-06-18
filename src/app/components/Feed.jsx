"use client";
import { useRouter } from "next/navigation";
import ResourceCard from "./ResourceCard";
import { useState, useEffect, useRef } from "react";

const ResourceCardList = ({ data, handleTagClick, handleUsernameClick}) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((res_book) => {
        return (
          <ResourceCard
            key={res_book.title}
            res_book={res_book}
            handleTagClick = {handleTagClick}
            handleUsernameClick = {handleUsernameClick}
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

  const handleTagClick = (cat) => {
    clearTimeout(searchTimeout.current);
    setSearchText(cat);
    searchTimeout.current = setTimeout(async () => {
      const searchResults = await fetchSearch(cat);
      setBooks(searchResults);
    }, 500);
  }

  const handleUsernameClick = (useremail)=>{
    router.push(`/profile/${useremail}`);
  }
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
      <ResourceCardList data={books} handleTagClick={handleTagClick} handleUsernameClick={handleUsernameClick}/>
    </section>
  );
};

export default Feed;
