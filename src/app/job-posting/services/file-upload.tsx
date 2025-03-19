import React, { useState, useRef } from "react";

const FileUpload: React.FC = () => {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const files = Array.from(event.dataTransfer.files);
    setUploadedFiles((prevFiles) => [...prevFiles, ...files]);
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleFileClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const files = Array.from(event.target.files);
      setUploadedFiles((prevFiles) => [...prevFiles, ...files]);
    }
  };

  return (
    <div className="container p-5 flex-col justify-start items-center gap-6 inline-flex w-full">
      <div className="justify-center items-center gap-2.5 inline-flex">
        <div className="text-center text-dark-blue-hue text-lg font-semibold leading-7 dark:text-white">
          File(s) or text to be translated:
        </div>
      </div>
      <div
        className="drop-zone self-stretch px-[100px] flex-col justify-start items-start gap-[13px] flex cursor-pointer"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onClick={handleFileClick}
      >
        <div className="self-stretch px-[27px] py-6 bg-[#fbfafa] dark:bg-black rounded-custom border border-[#3a9796] dark:border-[#5a5a5a] justify-center items-center gap-4 inline-flex">
          <div className="w-10 h-10 p-2.5 bg-[#fbfafa] dark:bg-dark rounded-[28px] border-4 border-accent-light justify-center items-center flex">
            <div className="grow shrink basis-0 self-stretch px-[1.67px] py-[2.50px] justify-center items-center inline-flex"></div>
          </div>
          <div className="grow shrink basis-0 flex-col justify-start items-center gap-1 inline-flex">
            <div className="self-stretch justify-start items-start gap-1 inline-flex">
              <div className="justify-center items-center gap-2 flex">
                <div className="text-[#bababc] dark:text-[#8a8a8a] text-base font-bold">
                  Click to upload
                </div>
              </div>
              <div className="text-[#525257] dark:text-[#a5a5a5] text-base font-normal">
                or drag and drop
              </div>
            </div>
            <div className="self-stretch text-[#525257] dark:text-[#a5a5a5] text-sm font-normal">
              .html, .htm, .rtf, .txt, .png, .jpg, .jpeg, .gif, .doc, .zip, .rar, .pdf, .eml (max.
              2mb)
            </div>
          </div>
        </div>
        <div className="self-stretch pl-6 pr-[11px] py-2 bg-accent-light dark:bg-black rounded-custom flex-col inline-flex">
          {uploadedFiles.map((file, index) => (
            <div key={index} className="text-[#141414] dark:text-[#e0e0e0] text-base font-normal">
              {file.name}
            </div>
          ))}
        </div>
      </div>
      <input ref={fileInputRef} type="file" onChange={handleFileSelect} className="hidden" />
    </div>
  );
};

export default FileUpload;
