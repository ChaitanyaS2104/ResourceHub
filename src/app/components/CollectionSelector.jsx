//To use react
"use client";
import CreatableSelect from "react-select/creatable";
import makeAnimated from "react-select/animated";
import { useState, useEffect } from "react";

const animatedComponents = makeAnimated();

const collectionOptions = [
  { value: "favorites", label: "Favorites" },
  { value: "reading-list", label: "Reading List" },
  { value: "inspiration", label: "Inspiration" },
  // Add more predefined collections here
];

const CollectionSelector = ({ onChange, setCollection, book, isEdit }) => {
  const [selected, setSelected] = useState({});
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    setCollection({ ...book, fromCollection: selected.value });
  }, [selected]);

  useEffect(() => {
    if (isEdit && book?.fromCollection) {
      const foundOption = collectionOptions.find(
        (opt) => opt.value === book.fromCollection
      );
      setSelected(
        foundOption || { value: book.fromCollection, label: book.fromCollection }
      );
    }
  }, [isEdit]);



  const handleChange = (option) => {
    setSelected(option);
    if (onChange) onChange(option);
  };

  return isClient ? (
    <CreatableSelect
      isClearable
      components={animatedComponents}
      options={collectionOptions}
      value={selected}
      onChange={handleChange}
      placeholder="Add to collection"
      className="max-w-xs text-sm"
    />
  ) : (
    <>Failed to load</>
  );
};

export default CollectionSelector;
