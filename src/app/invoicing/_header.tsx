import React from "react";

const InvoicingHeader = () => {
  return (
    <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 overflow-hidden gap-8 px-20 pt-10 pb-14 bg-accent dark:bg-black">
      <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2 px-10">
        <p className="self-stretch flex-grow-0 flex-shrink-0 w-full text-5xl font-semibold text-center text-primary">
          Invoicing
        </p>
        <p className="self-stretch flex-grow-0 flex-shrink-0 w-full text-base text-center text-black dark:text-accent-foreground">
          Easily create, send, and track invoices online.
        </p>
      </div>
    </div>
  );
};

export default InvoicingHeader;
