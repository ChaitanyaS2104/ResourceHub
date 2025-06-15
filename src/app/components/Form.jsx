"use client";
import Tagselector from "./Tagselector";
import Uploader from "./Uploader";
import CollectionSelector from "./CollectionSelector";
import UploaderForm from "./UploaderForm";
import { useState, useEffect } from "react";
import Link from "next/link";
import VideoLinkPreview from "./not used/VideoLinkPreview";
import AudioPreview from "./not used/AudioPreview";
import WebPreview from "./not used/WebPreview";
import ContactPreview from "./not used/ContactPreview";

const Form = ({ handleSubmit, book, setBook, submitting, btntype, all_resources, setAll_resources, isEdit }) => {
  const [show, setShow] = useState(false);
  const [type, setType] = useState(false);

  useEffect(() => {
    console.log(book);
  }, [book]);

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

//To show the currently uploaded resources
const SingleResCard = ({ res, onDelete }) => {
  return (
    <div className="flex justify-between items-start p-3 border rounded-lg glassmorphism max-w-4xl position-relative gap-3 lg:flex-row flex-col">
      <div className="self-center">
        {res.res_type == "video" && <VideoLinkPreview url={res.res_link}/>}
        {res.res_type == "audio / podcast" && <AudioPreview url={res.res_link}/>}
        {res.res_type == "article / blog" && <WebPreview/>}
        {res.res_type == "social media handle" && <ContactPreview/>}
        {res.res_type == "website details" && <WebPreview/>}
      </div>
      <div className="space-y-1 flex-1">
        <h2 className="text-xl font-semibold mb-2">{res.res_name}</h2>
        <p className="text-gray-700 text-sm">{res.description}</p>
        <div className="border-b-1 border-[#c7c7c7] w-full"></div>
        <a
          href={res.res_link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline text-xs"
        >
          {res.res_link}
        </a>
        <p className="text-xs text-gray-700 font-semibold">{res.res_owner}</p>
        <p className="text-xs text-gray-600">Type: {res.res_type}</p>
      </div>
      <button
        onClick={onDelete}
        className="h-8 px-3 text-sm text-white rounded-full orange_gradient border-1 border-amber-600 cursor-pointer hover:scale-[1.04]"
      >
        Remove
      </button>
    </div>
  );
};
