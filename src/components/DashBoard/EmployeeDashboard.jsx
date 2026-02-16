import React from "react";
import { Header } from "../other/Header";
import { TaskListNumbers } from "../other/TaskListNumbers";
import { TaskList } from "../TaskList/TaskList";

export const EmployeeDashboard = (props) => {
  return (
    <div
      className="
    min-h-screen w-full bg-[#1c1c1c]
    px-4 sm:px-6 md:px-10
    py-6 sm:py-8
    overflow-y-auto
  "
    >
      <Header changeUser={props.changeUser} data={props.data} />

      <div className="mt-6 sm:mt-8">
        <TaskListNumbers data={props.data} />
      </div>

      <div className="mt-6">
        <TaskList data={props.data} />
      </div>
    </div>
  );
};
