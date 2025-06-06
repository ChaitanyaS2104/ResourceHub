
const UploaderForm = ({show, type, setShow}) => {

  return (
    <>
      {/* Showing the form based on the type of resource */}
      {show && (
        <div className="fixed inset-0 z-50 flex items-center justify-center glassmorphism">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl p-6 relative">
            <button
              onClick={() => setShow(false)}
              className="absolute top-3 right-3 outline_btn hover:text-gray-800"
            >
              X
            </button>

            <h2 className="text-2xl font-bold mb-2">Upload {type}</h2>
            <div className="border-t border-[#c7c7c7] mb-4"></div>
            
            {/* Form & Preview Section */}
            <div className="flex flex-col gap-5 lg:flex-row">
              <div
                className="flex flex-col gap-4 w-full max-w-md"
              >

                <div>
                  <label className="block font-semibold text-gray-700 mb-1">
                    Resource Name
                  </label>
                  <input
                    type="text"
                    name="name"
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
                    name="link"
                    required
                    className="form_input"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-gray-700 mb-1">
                    Description
                  </label>
                  <textarea
                    name="description"
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
                    name="owner"
                    required
                    className="form_input"
                  />
                </div>
              </div>

              <div className="resource_preview rounded-md p-4 w-full max-w-md">
                <p className="text-gray-500 text-sm">Preview</p>
              </div>
            </div>

            <div className="mt-6">
              <button
                type="submit"
                className="black_btn w-full"
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
