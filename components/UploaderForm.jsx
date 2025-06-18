"use client";
import WebsiteView from "./WebsiteView";

import { useEffect, useState } from "react";

const UploaderForm = ({ show, type, setShow, setAll_resources }) => {
  //Store the form input values of resource
  const [temp_res, setTemp_res] = useState({
    resName: "",
    resLink: "",
    resDescription: "",
    resOwner: "",
  });

  useEffect(() => {
    if (show) {
      setTemp_res({
        resName: "",
        resLink: "",
        resDescription: "",
        resOwner: "",
      });
    }
  }, [show]);

  const handleAdd = async () => {
    setAll_resources((prevRes) => [
      ...prevRes,
      {
        res_name: temp_res.resName,
        res_link: temp_res.resLink,
        description: temp_res.resDescription,
        res_owner: temp_res.resOwner,
        res_type: type,
      },
    ]);
  };

  return (
    <>
      {/* Showing the form based on the type of resource */}
      {show && (
        <div className="fixed inset-0 z-50 flex items-center justify-center glassmorphism overflow-y-auto">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl p-6 relative my-8 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => {
                setShow(false);
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
                    value={temp_res.resName}
                    onChange={(e) =>
                      setTemp_res((prev) => ({
                        ...prev,
                        resName: e.target.value,
                      }))
                    }
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
                      setTemp_res((prev) => ({
                        ...prev,
                        resLink: e.target.value,
                      }));
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
                    value={temp_res.resDescription}
                    onChange={(e) => {
                      setTemp_res((prev) => ({
                        ...prev,
                        resDescription: e.target.value,
                      }));
                    }}
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
                    value={temp_res.resOwner}
                    onChange={(e) => {
                      setTemp_res((prev) => ({
                        ...prev,
                        resOwner: e.target.value,
                      }));
                    }}
                  />
                </div>
              </div>
              <div className="resource_preview rounded-md p-4 w-full max-w-sm">
                <WebsiteView url={temp_res.resLink} setTemp_res={setTemp_res} />
              </div>
            </div>

            <div className="mt-6">
              <button
                type="button"
                className="black_btn w-full"
                onClick={async () => {
                  await handleAdd();
                  setTemp_res({
                    resName: "",
                    resLink: "",
                    resDescription: "",
                    resOwner: "",
                  });
                  setShow(false);
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
