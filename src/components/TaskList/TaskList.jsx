import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({ data }) => {
  return (
    <>
      <div
        id="tasklist"
        className="rounded-xl overflow-x-auto overflow-y-hidden flex items-center justify-start gap-3 md:gap-5 py-3 md:py-5 flex-nowrap mt-5 md:mt-10 h-[400px] sm:h-[450px] md:h-[55%] w-full scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100"
      >
        {data.tasks.map((elem, i) => {
          if (elem.active) {
            return <AcceptTask key={i} data={elem} />;
          }
          if (elem.newTask) {
            return <NewTask key={i} data={elem} />;
          }
          if (elem.completed) {
            return <CompleteTask key={i} data={elem} />;
          }
          if (elem.failed) {
            return <FailedTask key={i} data={elem} />;
          }
        })}
      </div>
    </>
  );
};

export default TaskList;
