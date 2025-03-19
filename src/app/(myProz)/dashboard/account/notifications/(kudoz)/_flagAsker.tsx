import Image from "next/image";
import React from "react";

const FlagAsker = () => {
  return (
    <React.Fragment>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-primary">KudoZ askers to flag or filter</h1>
      </div>
      <p className="mt-2 text-gray-600 dark:text-primary ">
        In this page you can choose to receive, or not to receive, notifications for questions from
        specific KudoZ contributors.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <div className="bg-white dark:bg-black  p-6 rounded-lg shadow">
          <h2 className="text-primary text-lg font-semibold mb-4">Askers to flag</h2>
          <p className="text-gray-600 dark:text-primary mb-4">
            If you want to pay special attention to a particular asker, you can "flag" that user.
            You'll receive notifications of their questions, even if they do not match your
            settings.
          </p>
          <p className="text-gray-600 dark:text-primary mb-4">
            To flag a user, enter their ProZ ID, which is the string of numbers at the end of their
            profile URL.
          </p>
          <div className="flex items-center mb-4">
            <input
              type="text"
              placeholder="Enter ID"
              className="w-full p-2 border rounded-lg outline-none focus:outline-none"
            />
          </div>
          <button className="bg-primary text-white py-2 px-4 rounded-lg">Flag asker</button>
        </div>

        <div className="bg-white dark:bg-black p-6 rounded-lg shadow">
          <h2 className="text-primary text-lg font-semibold mb-4">Askers to filter</h2>
          <p className="text-gray-600 dark:text-primary  mb-4">
            If you decide that a certain user's questions are not of interest to you, you can choose
            to stop receiving notifications about their posts, regardless of your notification
            settings.
          </p>
          <p className="text-gray-600 dark:text-primary  mb-4">
            To filter a user, enter their ProZ ID, which is the string of numbers at the end of
            their profile URL.
          </p>
          <div className="flex items-center mb-4">
            <input
              type="text"
              placeholder="Enter ID"
              className="w-full p-2 border rounded-lg outline-none focus:outline-none"
            />
          </div>
          <button className="bg-primary text-white py-2 px-4 rounded-lg">Flag asker</button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <div className="bg-accent dark:bg-black rounded-lg p-4">
          <h3 className="text-primary text-lg font-semibold mb-4">Askers you are flagging</h3>
          <p className="text-gray-600 dark:text-primary ">
            You are not currently flagging any askers.
          </p>
        </div>

        <div className="bg-accent dark:bg-black rounded-lg p-4">
          <h3 className="text-primary text-lg font-semibold mb-4">Askers you are filtering</h3>
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
                <p className="text-gray-600 dark:text-primary ">Profile ID: 467590</p>
              </div>
              <button className="ml-auto text-gray-600 dark:text-primary  hover:text-red-600 material-symbols-outlined">
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
                <p className="text-gray-600 dark:text-primary ">Profile ID: 467590</p>
              </div>
              <button className="ml-auto text-gray-600 dark:text-primary  hover:text-red-600 material-symbols-outlined">
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
                <p className="text-gray-600 dark:text-primary ">Profile ID: 467590</p>
              </div>
              <button className="ml-auto text-gray-600 dark:text-primary  hover:text-red-600 material-symbols-outlined">
                delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default FlagAsker;
