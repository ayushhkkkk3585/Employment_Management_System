import React from "react";

const NewTask = ({ data }) => {
  return (
    <>
      <div className="h-full flex-shrink-0 w-[250px] sm:w-[280px] md:w-[300px] p-3 md:p-5 bg-blue-400 rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-700 py-1 px-3 rounded-md text-xs sm:text-sm">
            {data.category}
          </h3>
          <h4 className="text-xs sm:text-sm">{data.date}</h4>
        </div>
        <h2 className="mt-3 md:mt-5 text-xl md:text-2xl font-semibold">
          {data.title}
        </h2>
        <p className="text-xs sm:text-sm mt-3 md:mt-5">{data.description}</p>
        <div className="mt-4 ">
          <button className="flex-1 h-10 w-full bg-green-500 py-1 px-2 text-sm rounded hover:bg-green-600 transition-colors">
            Accept Task
          </button>
        </div>
      </div>
    </>
  );
};

export default NewTask;
