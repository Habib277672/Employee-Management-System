import React from "react";

export const TaskListNumbers = ({ data }) => {
  const counts = data?.taskCounts ?? {
    newTask: 0,
    completed: 0,
    active: 0,
    failed: 0,
  };
  return (
    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {/* New Task */}
      <div
        className="px-9 py-6 bg-[#232323] border border-[#2f2f2f] rounded-xl
               shadow-sm transition-all duration-300 ease-out
               hover:scale-[1.03] hover:border-white
               hover:shadow-[0_0_12px_rgba(255,255,255,0.25)]"
      >
        <h2 className="text-3xl font-semibold text-sky-400">
          {counts.newTask}
        </h2>
        <h3 className="text-xl font-medium text-gray-300">New Task</h3>
      </div>

      {/* Completed Task */}
      <div
        className="px-9 py-6 bg-[#232323] border border-[#2f2f2f] rounded-xl
               shadow-sm transition-all duration-300 ease-out
               hover:scale-[1.03] hover:border-white
               hover:shadow-[0_0_12px_rgba(255,255,255,0.25)]"
      >
        <h2 className="text-3xl font-semibold text-emerald-400">
          {counts.completed}
        </h2>
        <h3 className="text-xl font-medium text-gray-300">Completed Task</h3>
      </div>

      {/* Active Task */}
      <div
        className="px-9 py-6 bg-[#232323] border border-[#2f2f2f] rounded-xl
               shadow-sm transition-all duration-300 ease-out
               hover:scale-[1.03] hover:border-white
               hover:shadow-[0_0_12px_rgba(255,255,255,0.25)]"
      >
        <h2 className="text-3xl font-semibold text-amber-400">
          {counts.active}
        </h2>
        <h3 className="text-xl font-medium text-gray-300">Active Task</h3>
      </div>

      {/* Failed Task */}
      <div
        className="px-9 py-6 bg-[#232323] border border-[#2f2f2f] rounded-xl
               shadow-sm transition-all duration-300 ease-out
               hover:scale-[1.03] hover:border-white
               hover:shadow-[0_0_12px_rgba(255,255,255,0.25)]"
      >
        <h2 className="text-3xl font-semibold text-rose-500">
          {counts.failed}
        </h2>
        <h3 className="text-xl font-medium text-gray-300">Failed Task</h3>
      </div>
    </div>
  );
};
