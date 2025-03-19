const WithdrawalMethods = () => {
  const withdrawalMethods = [
    "Bank transfer",
    "Check",
    "PayPal",
    "Payoneer",
    "Skrill",
    "Wise",
    "Revolut",
    "Mobile Money",
    "Cryptocurrency via BitPay",
  ];

  return (
    <>
      {withdrawalMethods.map((method, index) => (
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

export default WithdrawalMethods;
