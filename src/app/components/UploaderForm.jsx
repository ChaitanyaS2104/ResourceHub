"use client";
import VideoLinkPreview from "./VideoLinkPreview";
import AudioPreview from "./AudioPreview";
import WebsiteView from "./WebsiteView";

import { useState } from "react";

const UploaderForm = ({ show, type, setShow, setAll_resources }) => {
  const [url, setUrl] = useState("");

  const handleAdd = ({res_name, res_link, description, owner, res_type}) => {
    setAll_resources((prevRes) => {
      return [...prevRes, { res_name, res_link, description, owner, res_type}];
    });
  };

  return (
    <>
      {/* Showing the form based on the type of resource */}
      {show && (
        <div className="fixed inset-0 z-50 flex items-center justify-center glassmorphism">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl p-6 relative">
            <button
              onClick={() => {
                setShow(false);
                setUrl("");
              }}
              className="absolute top-3 right-3 outline_btn hover:text-gray-800"
            >
              X
            </button>

            <h2 className="text-2xl font-bold mb-2">Upload {type}</h2>
            <div className="border-t border-[#c7c7c7] mb-4"></div>

            {/* Form & Preview Section */}
            <div className="flex flex-col gap-5 lg:flex-row">
              <div className="flex flex-col gap-4 w-full max-w-md">
                <div>
                  <label className="block font-semibold text-gray-700 mb-1">
                    Resource Name
                  </label>
                  <input
                    type="text"
                    id="res_name"
                    required
                    className="form_input"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-gray-700 mb-1">
                    Resource Link
                  </label>
                  <input
                    type="url"
                    id="res_link"
                    placeholder="Paste the link here"
                    required
                    className="form_input"
                    onChange={(e) => {
                      setUrl(e.target.value);
                    }}
                  />
                </div>

                <div>
                  <label className="block font-semibold text-gray-700 mb-1">
                    Description
                  </label>
                  <textarea
                    id="description"
                    rows="4"
                    className="form_input"
                  ></textarea>
                </div>

                <div>
                  <label className="block font-semibold text-gray-700 mb-1">
                    Owner / Creator Name
                  </label>
                  <input
                    type="text"
                    id="owner"
                    required
                    className="form_input"
                  />
                </div>
              </div>
              <div className="resource_preview rounded-md p-4 w-full max-w-sm">
                <WebsiteView url={url} setUrl={setUrl} />
              </div>
            </div>

            <div className="mt-6">
              <button
                type="submit"
                className="black_btn w-full"

                //Appending the resource to an array
                onClick={() => {
                  const res_name = document.getElementById("res_name").value;
                  const res_link = document.getElementById("res_link").value;
                  const description =
                    document.getElementById("description").value;
                  const owner = document.getElementById("owner").value;
                  const res_type = type
                  handleAdd({res_name, res_link, description, owner, res_type})
                  setShow(false);
                  setUrl("");
                }}
              >
                Upload Resource
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UploaderForm;
