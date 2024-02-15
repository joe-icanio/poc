import { Button } from "@mui/material";
import { useRef, useState } from "react";
import "./assets/css/app.css";
import FullLayout from "./layouts/FullLayout";
import clientInstance, { baseURL } from "./utils/axios";

function App() {
  const [fileId, setFileId] = useState("");
  const inputRef = useRef();

  const handleFileUpload = async (e) => {
    try {
      const file = e.target.files[0];
      const formData = new FormData();
      formData.append("file", file);
      const res = await clientInstance.post("/pdf/store", formData);
      setFileId(res.data?.data?.pdf_filename);
    } catch (err) {
      console.error(err);
    } finally {
      inputRef.current.value = "";
    }
  };

  return (
    <div>
      <FullLayout>
        <h2 className="flex items-center justify-center mb-10 text-5xl font-extrabold w-full">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            Welcome To Redaction Tool
          </span>
        </h2>
        <div className="flex items-center justify-center w-full mb-3">
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                className="w-14 h-14 mb-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p className="mb-2 text-md text-gray-500 dark:text-gray-400">
                <span className="font-semibold">
                  Click here to upload a file (PDF Only)
                </span>
              </p>
            </div>
            <input
              ref={inputRef}
              id="dropzone-file"
              type="file"
              className="hidden"
              onChange={handleFileUpload}
            />
          </label>
        </div>

        {fileId && (
          <div>
            <p className="my-2 text-lg text-green-600 font-semibold flex items-center justify-center">
              File Uploaded Successfully!
            </p>
            <p className="my-2 text-lg text-amber-800 font-semibold flex items-center justify-center">
              File name:
              <span className="font-semibold text-base text-gray-400 pl-2">
                {fileId}
              </span>
            </p>
          </div>
        )}

        <div className="flex items-center justify-center">
          <Button
            disabled={!fileId}
            href={`${baseURL}/pdf/mask?file_name=${fileId}`}
            target="_blank"
            className="relative inline-flex items-center justify-center !px-6 !py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out !border-2 !border-sky-500 !rounded-full shadow-md group"
          >
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#BE8976] group-hover:translate-x-0 ease">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="absolute flex items-center justify-center w-full h-full text-[#393458] transition-all duration-300 transform group-hover:translate-x-full ease">
              Download
            </span>
            <span className="relative invisible">Download</span>
          </Button>
        </div>
      </FullLayout>
    </div>
  );
}

export default App;
