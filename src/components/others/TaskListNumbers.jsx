import React from "react";

export const TaskListNumbers = ({ data }) => {
  return (
    <>
      <div className="flex flex-wrap mt-5 sm:mt-8 md:mt-10 justify-between gap-3 sm:gap-4 md:gap-5">
        <div className="rounded-xl w-[47%] md:w-[23%] py-4 sm:py-5 md:py-6 px-4 sm:px-6 md:px-9 bg-red-400">
          <h2 className="text-2xl sm:text-2xl md:text-3xl font-semibold">
            {data.taskNumbers.newTask}
          </h2>
          <h3 className="text-base sm:text-lg md:text-xl font-medium">
            New Task
          </h3>
        </div>
        <div className="rounded-xl w-[47%] md:w-[23%] py-4 sm:py-5 md:py-6 px-4 sm:px-6 md:px-9 bg-blue-400">
          <h2 className="text-2xl sm:text-2xl md:text-3xl font-semibold">
            {data.taskNumbers.completed}
          </h2>
          <h3 className="text-base sm:text-lg md:text-xl font-medium">
            Completed Task
          </h3>
        </div>
        <div className="rounded-xl w-[47%] md:w-[23%] py-4 sm:py-5 md:py-6 px-4 sm:px-6 md:px-9 bg-green-400">
          <h2 className="text-2xl sm:text-2xl md:text-3xl font-semibold">
            {data.taskNumbers.active}
          </h2>
          <h3 className="text-base sm:text-lg md:text-xl font-medium">
            Active Task
          </h3>
        </div>
        <div className="rounded-xl w-[47%] md:w-[23%] py-4 sm:py-5 md:py-6 px-4 sm:px-6 md:px-9 bg-yellow-400">
          <h2 className="text-2xl sm:text-2xl md:text-3xl font-semibold">
            {data.taskNumbers.failed}{" "}
          </h2>
          <h3 className="text-base sm:text-lg md:text-xl font-medium">
            Failed Task
          </h3>
        </div>
      </div>
    </>
  );
};
