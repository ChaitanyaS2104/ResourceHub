'use client'
import Tagselector from "./Tagselector";
import Uploader from "./Uploader";
import CollectionSelector from "./CollectionSelector";
import UploaderForm from "./UploaderForm";
import { useState } from "react";

const Form = () => {
  const [show, setShow] = useState(false);
  const [type, setType] = useState(false);
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
          className="w-full max-w-full flex gap-4 lg:flex-row flex-col mt-2.5"
        >
          <div className="glassmorphism w-full max-w-3xl flex flex-col gap-7 self-start">
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
                className="form_textarea max-w-96"
                placeholder="What's it about, and why might it be helpful to others?"
              />
            </label>

            <label className="flex gap-2 items-center">
              <span className="font-semibold text-base text-gray-700 text-nowrap">
                Category -
              </span>
              <Tagselector />
            </label>
            <label className="flex gap-2 items-center">
              <span className="font-semibold text-base text-gray-700 text-nowrap">
                Collection -
              </span>
              <CollectionSelector />
            </label>
          </div>
          <label className="glassmorphism max-w-fit" >
          <span className="font-semibold text-base text-gray-700 text-nowrap">
            Upload -
          </span>
          <Uploader setShow={setShow} setType={setType}/>
        </label>
        <UploaderForm show={show} type={type} setShow={setShow}/>

        </form>
      </section>
    </>
  );
};

export default Form;
