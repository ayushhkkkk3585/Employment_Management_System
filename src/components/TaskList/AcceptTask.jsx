import React from "react";

const AcceptTask = ({ data }) => {
  console.log(data);
  return (
    <>
      <div className="h-full flex-shrink-0 w-[250px] sm:w-[280px] md:w-[300px] p-3 md:p-5 bg-red-400 rounded-xl">
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
        <div className="flex flex-col sm:flex-row justify-between gap-2 mt-4">
          <button className="flex-1 bg-green-500 py-1 px-2 text-sm rounded hover:bg-green-600 transition-colors">
            Marks as Completed
          </button>
          <button className="flex-1 bg-red-500 py-1 px-2 text-sm rounded hover:bg-red-600 transition-colors">
            Marks as Failed
          </button>
        </div>
      </div>
    </>
  );
};

export default AcceptTask;
