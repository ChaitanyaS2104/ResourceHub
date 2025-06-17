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
  const [selected, setSelected] = useState([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    setCollection((prev) => ({
      ...prev,
      fromCollection: selected.map((opt) => opt.value),
    }));
  }, [selected]);

useEffect(() => {
  if (isEdit && Array.isArray(book.fromCollection)) {
    const selectedOptions = book.fromCollection.map((collection) => {
      const found = collectionOptions.find((opt) => opt.value === collection);
      return (
        found || {
          value: collection,
          label: collection,
        }
      );
    });
    setSelected(selectedOptions);
  }
}, [isEdit]);


  const handleChange = (option) => {
    setSelected(option);
    if (onChange) onChange(option);
  };

  return isClient ? (
    <CreatableSelect
      isClearable
      isMulti
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
