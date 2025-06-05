import React from "react";
import Tagselector from "./Tagselector";


const Form = () => {
  return (
    <>
      <section className="w-full max-w-full flex-start flex-col">
        <h1 className="head_text text-left blue_gradient">
          Create resource book
        </h1>
        <p className="desc text-left max-w-md">
          Find and share valuable resources — explore, contribute, and grow
          together.
        </p>
        <form
          action=""
          className="mt-10 w-full max-w-3xl flex flex-col gap-7 glassmorphism"
        >
          <label className="flex items-center gap-2">
            <span className="font-semibold text-base text-gray-700 text-nowrap">
              Title -
            </span>
            <input type="text" className="form_input max-w-2xs" />
          </label>

          <label className="flex items-center gap-2">
            <span className="font-semibold text-base text-gray-700 text-nowrap self-start">
              Description -
            </span>
            <textarea
              className="form_textarea max-w-96 italic"
              placeholder="What's this resource about, and why might it be helpful to others?"
            />
          </label>

          <label className="flex gap-2 items-center">
            <span className="font-semibold text-base text-gray-700 text-nowrap">
              Category -
            </span>
            <Tagselector/>
          </label>
          
        </form>
      </section>
    </>
  );
};

export default Form;
