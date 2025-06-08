"use client";
import WebsiteView from "./WebsiteView";

import { useEffect, useState } from "react";

const UploaderForm = ({ show, type, setShow, setAll_resources, setResourceIds }) => {
  const [url, setUrl] = useState("");
  const [resName, setResName] = useState("");
  const [resLink, setResLink] = useState("");
  const [description, setDescription] = useState("");
  const [resOwner, setResOwner] = useState("");


  useEffect(() => {
    if (show) {
      setResName("");
      setResLink("");
      setDescription("");
      setResOwner("");
      setUrl("");
    }
  }, [show])
  
  const postResource = async ({
    res_name,
    res_link,
    description,
    res_owner,
    res_type,
  }) => {
    const res = await fetch("/api/resource/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        res_name,
        res_link,
        description,
        res_owner,
        res_type,
      }),
    });

    const data = await res.json();
    setResourceIds((prevIds) => {
      return [...prevIds, data.id];
    });
    console.log(data);
    return;
  };

  const handleAdd = async () => {
    setAll_resources((prevRes) => [
      ...prevRes,
      {
        res_name: resName,
        res_link: resLink,
        description,
        res_owner: resOwner,
        res_type: type,
      },
    ]);
    await postResource({
      res_name: resName,
      res_link: resLink,
      description,
      res_owner: resOwner,
      res_type: type,
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
                    value={resName}
                    onChange={(e) => setResName(e.target.value)}
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
                      setResLink(e.target.value);
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
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
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
                    value={resOwner}
                    onChange={(e) => setResOwner(e.target.value)}
                  />
                </div>
              </div>
              <div className="resource_preview rounded-md p-4 w-full max-w-sm">
                <WebsiteView url={url} setUrl={setUrl} />
              </div>
            </div>

            <div className="mt-6">
              <button
                type="button"
                className="black_btn w-full"
                onClick={async () => {
                  await handleAdd();
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
