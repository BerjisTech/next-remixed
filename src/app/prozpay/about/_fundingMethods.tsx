const FundingMethods = () => {
  const fundingMethods = [
    "Credit card",
    "PayPal",
    "Wise",
    "Payoneer",
    "Skrill",
    "Bank transfer",
    "Check",
  ];

  return (
    <>
      {fundingMethods.map((method, index) => (
        <div
          key={index}
          className="px-2 py-1.5 bg-primary-50 dark:bg-teal-900 rounded-lg justify-center items-center gap-2.5 flex"
        >
          <div className="text-dark-blue-hue dark:text-teal-100 text-sm font-normal leading-tight">
            {method}
          </div>
        </div>
      ))}
    </>
  );
};

export default FundingMethods;
