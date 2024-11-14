import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
  const [userdata, setUserdata] = useContext(AuthContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const task = {
      title,
      description,
      date,
      assignTo,
      category,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    };

    const data = userdata;

    data.forEach((elem) => {
      if (elem.firstName == assignTo) {
        elem.tasks.push(task);
        elem.taskNumbers.newTask = elem.taskNumbers.newTask + 1;
      }
    });
    setUserdata(data);
    console.log(data);

    setTitle("");
    setDescription("");
    setDate("");
    setAssignTo("");
    setCategory("");
  };
  return (
    <>
      <div className="p-3 sm:p-4 md:p-5 bg-[#1C1C1C] mt-4 sm:mt-5 md:mt-7 rounded-md">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col md:flex-row md:flex-wrap w-full items-start justify-between gap-4 md:gap-0"
        >
          <div className="w-full md:w-1/2">
            <div>
              <h3 className="text-sm text-gray-300 mb-1">Task Title</h3>
              <input
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                className="text-sm py-1 px-2 w-full md:w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
                type="text"
                placeholder="Make an UI design"
              />
            </div>
            <div>
              <h3 className="text-sm text-gray-300 mb-1">Date</h3>
              <input
                value={date}
                onChange={(e) => {
                  setDate(e.target.value);
                }}
                className="text-sm py-1 px-2 w-full md:w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
                type="date"
                name=""
                id=""
              />
            </div>
            <div>
              <h3 className="text-sm text-gray-300 mb-1">Assign To</h3>
              <input
                value={assignTo}
                onChange={(e) => {
                  setAssignTo(e.target.value);
                }}
                className="text-sm py-1 px-2 w-full md:w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
                type="text"
                placeholder="Employee name"
              />
            </div>
            <div>
              <h3 className="text-sm text-gray-300 mb-1">Category</h3>
              <input
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
                className="text-sm py-1 px-2 w-full md:w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
                type="text"
                placeholder="design, dev,etc etc"
              />
            </div>
          </div>
          <div className="w-full md:w-2/5 flex flex-col items-start">
            <h3 className="text-sm text-gray-300 mb-1">Description</h3>
            <textarea
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              className="w-full h-32 sm:h-36 md:h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400"
            ></textarea>
            <button className="bg-emerald-500 py-2 sm:py-2.5 md:py-3 hover:bg-emerald-600 transition-colors px-5 rounded text-sm mt-4 w-full">
              Create Task
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateTask;
