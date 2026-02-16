import React from "react";

export const CompleteTask = ({ data }) => {
  return (
    <div
      className="
    shrink-0 w-full sm:w-70 md:w-75 lg:w-[320px]
    p-5 bg-[#232323] rounded-xl border border-[#2f2f2f]
    shadow-sm transition-all duration-300 ease-out
    hover:scale-[1.02] hover:border-white
    hover:shadow-[0_0_14px_rgba(255,255,255,0.18)]
  "
    >
      {/* Header */}
      <div className="flex justify-between items-center">
        <span className="text-xs px-3 py-1 rounded-full bg-[#1c1c1c] border border-[#333] text-emerald-400 font-medium">
          {data.category}
        </span>
        <span className="text-xs text-gray-400">{data.taskDate}</span>
      </div>

      {/* Title */}
      <h2 className="text-lg md:text-xl font-semibold text-gray-100 mt-4 leading-snug">
        {data.taskTitle}
      </h2>

      {/* Description */}
      <p className="text-sm text-gray-400 mt-2 line-clamp-3">
        {data.taskDescription}
      </p>

      {/* Status Button */}
      <div className="mt-4">
        <button
          disabled
          className="
        w-full py-2 text-sm font-medium rounded-md cursor-default
        bg-emerald-500/10 text-emerald-400 border border-emerald-500/30
      "
        >
          Completed
        </button>
      </div>
    </div>
  );
};
