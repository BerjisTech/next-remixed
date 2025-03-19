import React, { useState } from "react";

interface UploadCsvFormProps {
  formData: any;
  setFormData: any;
}

const UploadCsvForm: React.FC<UploadCsvFormProps> = ({ formData, setFormData }) => {
  const allowedFileTypes = ".pdf";
  const [isDragging, setIsDragging] = useState(false);

  const handleFileDropped = (e: any) => {
    e.preventDefault();
  };

  const handleDragEnter = (e: any) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragOver = (e: any) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: any) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const removeSelectedFile = () => {
    setFormData({
      ...formData,
      has_payroll_attachment: false,
      payroll: null,
      payroll_file_name: "",
    });
  };

  return (
    <div className="flex flex-col justify-start items-center w-full gap-6">
      <div className="flex flex-col justify-start items-start w-3/4 gap-6">
        <div className="flex flex-col justify-start items-start w-full relative gap-2">
          <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-dark dark:text-white">
            Attach PDF invoice (Optional)
          </p>
          <div
            className={`flex flex-col justify-center min-h-36 items-center w-full relative gap-4 px-6 py-3 rounded-xl bg-[#fbfafa] ${isDragging ? "border-2 border-primary" : "border border-primary-50"}`}
          >
            <input
              id="fileInput"
              type="file"
              accept={allowedFileTypes}
              onChange={handleFileDropped}
              onDrop={handleFileDropped}
              onDragEnter={handleDragEnter}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              className="absolute z-20 w-full h-full cursor-pointer opacity-0 top-0 left-0"
            />
            <svg
              width="46"
              height="46"
              viewBox="0 0 46 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 flex-shrink-0 w-10 h-10 relative"
              preserveAspectRatio="xMidYMid meet"
            >
              <rect x="3" y="3" width="40" height="40" rx="20" fill="#FBFAFA"></rect>
              <rect
                x="3"
                y="3"
                width="40"
                height="40"
                rx="20"
                stroke="#F4F4F3"
                strokeWidth="6"
              ></rect>
              <path
                d="M19.6641 26.3333L22.9974 23M22.9974 23L26.3307 26.3333M22.9974 23V30.5M29.6641 26.9524C30.682 26.1117 31.3307 24.8399 31.3307 23.4167C31.3307 20.8854 29.2787 18.8333 26.7474 18.8333C26.5653 18.8333 26.3949 18.7383 26.3025 18.5814C25.2158 16.7374 23.2094 15.5 20.9141 15.5C17.4623 15.5 14.6641 18.2982 14.6641 21.75C14.6641 23.4718 15.3603 25.0309 16.4865 26.1613"
                stroke="#3A9796"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            <div className="cursor-pointer flex flex-col justify-start items-center flex-grow gap-1">
              <div className="flex justify-start items-start w-full relative gap-1">
                <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2">
                  <p className="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-[#bababc] dark:text-primary">
                    Click to upload
                  </p>
                </div>
                <p className="flex-grow-0 flex-shrink-0 text-base text-left text-dark-blue-hue dark:text-dark">
                  or drag and drop
                </p>
              </div>
            </div>
            <div className="cursor-pointer flex flex-col justify-start items-center flex-grow gap-1">
              <div className="flex justify-start items-start w-full relative gap-1">
                <p className="flex-grow-0 flex-shrink-0 text-base text-left text-dark-blue-hue dark:text-dark">
                  .pdf (max 10MB)
                </p>
              </div>
            </div>
          </div>
          {formData.has_invoice_attachment && (
            <div className="flex justify-between items-center w-full relative pl-6 pr-2.5 py-2 rounded-2xl bg-accent-light">
              <p className="flex-grow-0 flex-shrink-0 text-base text-left text-black">
                {formData.file_name}
              </p>
              <div onClick={removeSelectedFile}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 18 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <path
                    d="M6.75 2.75H11.25M2.25 5H15.75M14.25 5L13.724 12.8895C13.6451 14.0732 13.6057 14.665 13.35 15.1138C13.1249 15.5088 12.7854 15.8265 12.3762 16.0248C11.9115 16.25 11.3183 16.25 10.132 16.25H7.86799C6.68168 16.25 6.08852 16.25 5.62375 16.0248C5.21457 15.8265 4.87507 15.5088 4.64999 15.1138C4.39433 14.665 4.35488 14.0732 4.27596 12.8895L3.75 5M7.5 8.375V12.125M10.5 8.375V12.125"
                    stroke="#6C6C72"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default UploadCsvForm;
