"use client";
import Tagselector from "./Tagselector";
import Uploader from "./Uploader";
import CollectionSelector from "./CollectionSelector";
import UploaderForm from "./UploaderForm";
import { useState, useEffect } from "react";
import Link from "next/link";
import SingleResCard from "./SingleResCard"

const Form = ({ handleSubmit, book, setBook, submitting, btntype, all_resources, setAll_resources, isEdit }) => {
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
          className="w-full max-w-full flex gap-4 lg:flex-row flex-col mt-2.5"
          onSubmit={handleSubmit}
        >
          <div className="glassmorphism w-full max-w-3xl flex flex-col gap-7 self-start">
            <label className="flex items-center gap-2">
              <span className="font-semibold text-base text-gray-700 text-nowrap">
                Title -
              </span>
              <input
                type="text"
                className="form_input max-w-2xs"
                onChange={(e) => {
                  setBook({ ...book, title: e.target.value });
                }}
                value={book.title}
              />
            </label>

            <label className="flex items-center gap-2">
              <span className="font-semibold text-base text-gray-700 text-nowrap self-start">
                Description -
              </span>
              <textarea
                className="form_textarea max-w-96"
                placeholder="What's it about, and why might it be helpful to others?"
                onChange={(e) => {
                  setBook({ ...book, description: e.target.value });
                }}
                value={book.description}
              />
            </label>

            <label className="flex gap-2 items-center">
              <span className="font-semibold text-base text-gray-700 text-nowrap">
                Category -
              </span>
              <Tagselector setCategory={setBook} book={book} isEdit={isEdit}/>
            </label>
            <label className="flex gap-2 items-center">
              <span className="font-semibold text-base text-gray-700 text-nowrap">
                Collection -
              </span>
              <CollectionSelector setCollection={setBook} book={book} isEdit={isEdit}/>
            </label>

            <div className="flex-end mx-3 mb-5 gap-4">
              <Link href="/" className="text-gray-500 text-sm">
                Cancel
              </Link>
              <button
                type="submit"
                disabled={submitting}
                className="px-7 py-2.5 text-sm bg-amber-600 rounded-full text-white hover:cursor-pointer hover:bg-amber-700 hover:scale-[1.04]"
              >
                {submitting ? `${btntype}...` : `${btntype}`}
              </button>
            </div>
          </div>
          <label className="glassmorphism max-w-fit">
            <span className="font-semibold text-base text-gray-700 text-nowrap">
              Upload -
            </span>
            <Uploader setShow={setShow} setType={setType} />
          </label>

          <UploaderForm
            show={show}
            type={type}
            setShow={setShow}
            setAll_resources={setAll_resources}
          />
        </form>
        <div className="grid py-4 gap-1.5">
          {all_resources.map((res) => {
            return (
              <SingleResCard
                key={res.res_name}
                res={res}
                onDelete={() => {
                  setAll_resources(
                    all_resources.filter((r) => r.res_name !== res.res_name)
                  );
                }}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Form;
