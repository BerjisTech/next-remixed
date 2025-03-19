const ProzPayDebits = () => {
  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full text-left text-sm text-gray-600">
        <thead className="bg-gray-100 border-b border-gray-300">
          <tr>
            <th className="px-4 py-2">
              <div className="flex items-center gap-1">
                Created
                <svg
                  className="w-4 h-4 text-gray-400 cursor-pointer hover:text-gray-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 15l7-7 7 7"
                  />
                </svg>
              </div>
            </th>
            <th className="px-4 py-2">
              <div className="flex items-center gap-1">
                Status
                <svg
                  className="w-4 h-4 text-gray-400 cursor-pointer hover:text-gray-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 15l7-7 7 7"
                  />
                </svg>
              </div>
            </th>
            <th className="px-4 py-2">
              <div className="flex items-center gap-1">
                Recipient and notes
                <svg
                  className="w-4 h-4 text-gray-400 cursor-pointer hover:text-gray-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 15l7-7 7 7"
                  />
                </svg>
              </div>
            </th>
            <th className="px-4 py-2">
              <div className="flex items-center gap-1">
                Original amount
                <svg
                  className="w-4 h-4 text-gray-400 cursor-pointer hover:text-gray-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 15l7-7 7 7"
                  />
                </svg>
              </div>
            </th>
            <th className="px-4 py-2">Fees</th>
            <th className="px-4 py-2">
              <div className="flex items-center gap-1">
                Net amount
                <svg
                  className="w-4 h-4 text-gray-400 cursor-pointer hover:text-gray-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 15l7-7 7 7"
                  />
                </svg>
              </div>
            </th>
            <th className="px-4 py-2">Actions</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-gray-300 bg-white hover:bg-gray-50">
            <td className="px-4 py-2">26 Feb 2009</td>
            <td className="px-4 py-2">
              <span className="inline-block px-2 py-1 text-xs font-semibold text-red-600 bg-red-100 rounded-full">
                Pending
              </span>
            </td>
            <td className="px-4 py-2">
              <div>Hayjor Roca</div>
              <div className="text-gray-400 text-xs">Note: something something</div>
            </td>
            <td className="px-4 py-2">150.00 USD</td>
            <td className="px-4 py-2">0.00 USD</td>
            <td className="px-4 py-2">150.00 USD</td>
            <td className="px-4 py-2">
              <button className="text-primary font-medium hover:underline">Accept and pay</button>
            </td>
            <td className="px-4 py-2">
              <button className="text-red-500 font-medium hover:underline">Reject</button>
            </td>
          </tr>
          <tr className="border-b border-gray-300 bg-white hover:bg-gray-50">
            <td className="px-4 py-2">26 Feb 2009</td>
            <td className="px-4 py-2">
              <span className="inline-block px-2 py-1 text-xs font-semibold text-primary bg-primary-50 rounded-full">
                Accepted
              </span>
            </td>
            <td className="px-4 py-2">
              <div>Hayjor Roca</div>
              <div className="text-gray-400 text-xs">Note: something something</div>
            </td>
            <td className="px-4 py-2">150.00 USD</td>
            <td className="px-4 py-2">7.50 USD (5%)</td>
            <td className="px-4 py-2">157.50 USD</td>
            <td className="px-4 py-2" colSpan={2}>
              <button className="text-gray-500 font-medium hover:underline">See payment</button>
            </td>
          </tr>
          <tr className="border-b border-gray-300 bg-white hover:bg-gray-50">
            <td className="px-4 py-2">26 Feb 2009</td>
            <td className="px-4 py-2">
              <span className="inline-block px-2 py-1 text-xs font-semibold text-gray-600 bg-gray-200 rounded-full">
                Rejected
              </span>
            </td>
            <td className="px-4 py-2">
              <div>Hayjor Roca</div>
              <div className="text-gray-400 text-xs">Note: something something</div>
            </td>
            <td className="px-4 py-2">150.00 USD</td>
            <td className="px-4 py-2">0.00 USD</td>
            <td className="px-4 py-2">150.00 USD</td>
            <td className="px-4 py-2" colSpan={2}></td>
          </tr>
          {/* Repeat rows as needed */}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <button className="bg-gray-200 px-4 py-2 rounded-md hover:bg-gray-300">
          &larr; Previous
        </button>
        <div className="text-gray-500 text-sm">
          Page <span className="font-semibold">1</span> of 10
        </div>
        <button className="bg-gray-200 px-4 py-2 rounded-md hover:bg-gray-300">Next &rarr;</button>
      </div>
    </div>
  );
};
export default ProzPayDebits;
