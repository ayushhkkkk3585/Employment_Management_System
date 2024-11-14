import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const [userdata, setUserdata] = useContext(AuthContext);
  return (
    <>
      <div className="bg-[#1c1c1c] p-3 sm:p-5 rounded mt-5">
        {/* Header - Hidden on mobile */}
        <div className="hidden sm:flex bg-red-400 mb-2 py-2 px-4 justify-between rounded">
          <h2 className="text-sm md:text-lg font-medium w-1/5">
            Employee Name
          </h2>
          <h3 className="text-sm md:text-lg font-medium w-1/5">New Task</h3>
          <h5 className="text-sm md:text-lg font-medium w-1/5">Active Task</h5>
          <h5 className="text-sm md:text-lg font-medium w-1/5">Completed</h5>
          <h5 className="text-sm md:text-lg font-medium w-1/5">Failed</h5>
        </div>
        <div className="space-y-4 sm:space-y-2">
          {userdata.map(function (elem, idx) {
            return (
              <div key={idx}>
                {/* Mobile View */}
                <div className="sm:hidden border-2 border-emerald-500 mb-2 p-4 rounded space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium text-gray-400">
                      Employee:
                    </span>
                    <span className="text-sm font-medium">
                      {elem.firstName}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium text-gray-400">
                      New Task:
                    </span>
                    <span className="text-sm font-medium text-blue-400">
                      {elem.taskNumbers.newTask}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium text-gray-400">
                      Active Task:
                    </span>
                    <span className="text-sm font-medium text-yellow-400">
                      {elem.taskNumbers.active}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium text-gray-400">
                      Completed:
                    </span>
                    <span className="text-sm font-medium text-white">
                      {elem.taskNumbers.completed}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium text-gray-400">
                      Failed:
                    </span>
                    <span className="text-sm font-medium text-red-600">
                      {elem.taskNumbers.failed}
                    </span>
                  </div>
                </div>

                {/* Desktop View */}
                <div className="hidden sm:flex border-2 border-emerald-500 mb-2 py-2 px-4 justify-between rounded">
                  <h2 className="text-sm md:text-lg font-medium w-1/5">
                    {elem.firstName}
                  </h2>
                  <h3 className="text-sm md:text-lg font-medium w-1/5 text-blue-400">
                    {elem.taskNumbers.newTask}
                  </h3>
                  <h5 className="text-sm md:text-lg font-medium w-1/5 text-yellow-400">
                    {elem.taskNumbers.active}
                  </h5>
                  <h5 className="text-sm md:text-lg font-medium w-1/5 text-white">
                    {elem.taskNumbers.completed}
                  </h5>
                  <h5 className="text-sm md:text-lg font-medium w-1/5 text-red-600">
                    {elem.taskNumbers.failed}
                  </h5>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AllTask;
