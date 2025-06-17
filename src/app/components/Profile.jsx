import React, { useEffect } from "react";
import ResourceCard from "./ResourceCard";

const Profile = ({ name, desc, data, handleEdit, handleDelete }) => {
    useEffect(()=>{
        console.log(data)
    }, [data]);
  return (
    <section className="w-full">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{name}</span>
      </h1>
      <p className="desc text-left">{desc}</p>

      <div className="mt-10 prompt_layout">
        {data.map((res_book) => {
          return (
            <ResourceCard
              key={res_book.title}
              res_book={res_book}
              handleEdit={() => handleEdit && handleEdit(res_book)}
              handleDelete={() => handleDelete && handleDelete(res_book)}
              handleTagClick={()=>{}}
              handleUsernameClick={()=>{}}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Profile;
