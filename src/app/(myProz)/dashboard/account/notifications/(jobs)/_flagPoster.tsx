import Image from "next/image";
import React from "react";

const FlagPoster = () => {
  return (
    <React.Fragment>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-primary">Job posters to flag or filter</h1>
      </div>
      <p className="mt-2 text-gray-600">
        Here you can choose to be notified when a job poster makes a post. You can also block
        posters entirely.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <div className="flex flex-col gap-5">
          <div className=" p-6 rounded-lg shadow">
            <h2 className="text-primary text-lg font-semibold ">Posters to flag</h2>
            <p className="text-gray-600 ">
              If you want to pay special attention to a job poster, you can "flag" that user or
              company. You will receive notifications of flagged posters' offers, even if they do
              not match your notification settings.
            </p>
            <p className="text-gray-600 ">
              To flag a user, enter their ProZ ID (found at the end of their profile URL). To flag
              an entire company, enter the outsourcer's Blue Board ID.
            </p>
            <span className="font-semibold dark:text-primary pt-[20px] block">ProZ ID number</span>
            <div className="flex flex-col md:flex-row gap-2 items-center justify-between mt-2">
              <input
                type="text"
                placeholder="Enter ID"
                className="dark:bg-dark dark:text-primary w-full p-2 border rounded-lg "
              />
              <button className="w-full md:w-auto bg-green-gradient dark:bg-green-gradient-dark text-white py-2 px-4 rounded-lg">
                Search
              </button>
            </div>
            <span className="font-semibold dark:text-primary pt-[20px] block">Blue Board ID</span>
            <div className="flex flex-col md:flex-row gap-2 items-center justify-between mt-2">
              <input
                type="text"
                placeholder="Outsourcer ID"
                className="dark:bg-dark dark:text-primary w-full p-2 border rounded-lg "
              />
              <button className="w-full md:w-auto bg-green-gradient dark:bg-green-gradient-dark text-white py-2 px-4 rounded-lg">
                Search
              </button>
            </div>
            <span className="font-semibold dark:text-primary pt-[20px] block">
              Business page ID
            </span>
            <div className="flex flex-col md:flex-row gap-2 items-center justify-between mt-2">
              <input
                type="text"
                placeholder="Outsourcer ID"
                className="dark:bg-dark dark:text-primary w-full p-2 border rounded-lg "
              />
              <button className="w-full md:w-auto bg-green-gradient dark:bg-green-gradient-dark text-white py-2 px-4 rounded-lg">
                Search
              </button>
            </div>
            <button className="w-full md:w-auto bg-green-gradient dark:bg-green-gradient-dark text-white py-2 px-4 rounded-lg mt-2">
              Add
            </button>
          </div>

          <div className="bg-accent dark:bg-dark p-3 rounded-lg">
            <h3 className="text-primary dark:text-primary text-lg font-semibold ">
              Posters you are flagging
            </h3>
            <p className="text-gray-600 dark:text-primary">
              You are not currently flagging any job posters.
            </p>
          </div>
          <div className="bg-accent dark:bg-dark p-3 rounded-lg">
            <h3 className="text-primary dark:text-primary text-lg font-semibold ">
              Posters you are flagging
            </h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Image
                  src="https://via.placeholder.com/40"
                  alt="Profile"
                  width={40}
                  height={40}
                  className="rounded-full mr-4"
                />

                <div>
                  <p className="font-semibold">Lorem ipsum dolor sit</p>
                  <p className="text-gray-600 dark:text-primary">Blue Board ID: 467593</p>
                </div>
                <button className="ml-auto text-gray-600 hover:text-red-600 material-symbols-outlined">
                  delete
                </button>
              </div>
              <div className="flex items-center">
                <Image
                  src="https://via.placeholder.com/40"
                  alt="Profile"
                  width={40}
                  height={40}
                  className="rounded-full mr-4"
                />

                <div>
                  <p className="font-semibold">Lorem ipsum dolor sit</p>
                  <p className="text-gray-600 dark:text-primary">Blue Board ID: 467593</p>
                </div>
                <button className="ml-auto text-gray-600 hover:text-red-600 material-symbols-outlined">
                  delete
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <div className="mt-6">
            <h3 className="text-primary text-lg font-semibold ">Blue Board rating</h3>
            <div className=" p-6 rounded-lg shadow">
              <p className="text-gray-600 ">
                Do not notify me of job postings by outsourcers with an average LWA rating under or
                equal to:
              </p>
              <div className="flex items-center flex-col md:flex-row gap-2 justify-between">
                <select className="w-full dark:bg-dark dark:text-primary p-2 border rounded-lg ">
                  <option>No restriction</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
                <button className="w-full md:w-auto bg-green-gradient dark:bg-green-gradient-dark text-white py-2 px-4 rounded-lg">
                  Save
                </button>
              </div>
              <label className="flex items-center justify-between w-full mt-4 cursor-pointer">
                <span className="text-sm font-medium text-gray-900 dark:text-gray-300">
                  Require outsourcers to have a <br />
                  <a href="/blueboards" className="text-primary" target="_blank">
                    Blue Board record.
                  </a>
                </span>
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-teal-800 rounded-full peer bg-green-gradient dark:bg-green-gradient-dark peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-teal-600"></div>
              </label>
            </div>
          </div>
          <div className=" p-6 rounded-lg shadow">
            <h2 className="text-primary text-lg font-semibold ">Posters to filter</h2>
            <p className="text-gray-600 ">
              If you decide that a certain person or company is unlikely to post jobs of interest to
              you, you can opt out of receiving notifications about their offers.
            </p>
            <p className="text-gray-600 ">
              To filter a person, enter their ProZ ID. To filter an entire company, enter the
              outsourcer's Blue Board ID (found at the end of their Blue Board record URL).
            </p>
            <span className="font-semibold dark:text-primary pt-[20px] block">ProZ ID number</span>
            <div className="flex flex-col md:flex-row gap-2 items-center justify-between mt-2">
              <input
                type="text"
                placeholder="Enter ID"
                className="dark:bg-dark dark:text-primary w-full p-2 border rounded-lg "
              />
              <button className="w-full md:w-auto bg-green-gradient dark:bg-green-gradient-dark text-white py-2 px-4 rounded-lg">
                Search
              </button>
            </div>
            <span className="font-semibold dark:text-primary pt-[20px] block">Blue Board ID</span>
            <div className="flex flex-col md:flex-row gap-2 items-center justify-between mt-2">
              <input
                type="text"
                placeholder="Outsourcer ID"
                className="dark:bg-dark dark:text-primary w-full p-2 border rounded-lg "
              />
              <button className="w-full md:w-auto bg-green-gradient dark:bg-green-gradient-dark text-white py-2 px-4 rounded-lg">
                Search
              </button>
            </div>
            <span className="font-semibold dark:text-primary pt-[20px] block">
              Business page ID
            </span>
            <div className="flex flex-col md:flex-row gap-2 items-center justify-between mt-2">
              <input
                type="text"
                placeholder="Outsourcer ID"
                className="dark:bg-dark dark:text-primary w-full p-2 border rounded-lg "
              />
              <button className="w-full md:w-auto bg-green-gradient dark:bg-green-gradient-dark text-white py-2 px-4 rounded-lg">
                Search
              </button>
            </div>
            <button className="w-full md:w-auto bg-green-gradient dark:bg-green-gradient-dark text-white py-2 px-4 rounded-lg mt-2">
              Add
            </button>
          </div>
          <div className="bg-accent dark:bg-dark p-3 rounded-lg">
            <h3 className="text-primary text-lg font-semibold ">Posters you are filtering</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Image
                  src="https://via.placeholder.com/40"
                  alt="Profile"
                  width={40}
                  height={40}
                  className="rounded-full mr-4"
                />

                <div>
                  <p className="font-semibold">Lorem ipsum dolor sit</p>
                  <p className="text-gray-600 dark:text-primary">Profile ID: 467593</p>
                </div>
                <button className="ml-auto text-gray-600 hover:text-red-600 material-symbols-outlined">
                  delete
                </button>
              </div>
              <div className="flex items-center">
                <Image
                  src="https://via.placeholder.com/40"
                  alt="Profile"
                  width={40}
                  height={40}
                  className="rounded-full mr-4"
                />

                <div>
                  <p className="font-semibold">Lorem ipsum dolor sit</p>
                  <p className="text-gray-600 dark:text-primary">Profile ID: 467593</p>
                </div>
                <button className="ml-auto text-gray-600 hover:text-red-600 material-symbols-outlined">
                  delete
                </button>
              </div>
            </div>
          </div>
          <div className="bg-accent dark:bg-dark p-3 rounded-lg">
            <h3 className="text-primary text-lg font-semibold ">Posters you are filtering</h3>
            <p className="text-gray-600 dark:text-primary">
              You are not currently filtering any outsourcers.
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default FlagPoster;
