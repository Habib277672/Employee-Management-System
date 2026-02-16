import React from "react";
import { useState } from "react";

export const AcceptTask = ({ data }) => {
  const [status, setStatus] = useState(null);

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
        <span className="text-xs px-3 py-1 rounded-full bg-[#1c1c1c] border border-[#333] text-sky-400 font-medium">
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

      {/* Actions */}
      <div className="flex gap-3 mt-5">
        {/* Completed Button */}
        <button
          onClick={() => setStatus("completed")}
          disabled={status !== null}
          className={`
          flex-1 py-1.5 text-sm rounded-md transition-colors
          ${
            status === "completed"
              ? "bg-green-500/20 text-green-400 border border-green-500/40 cursor-not-allowed"
              : "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/20"
          }
        `}
        >
          {status === "completed" ? "Task Completed" : "Mark as Completed"}
        </button>

        {/* Failed Button */}
        <button
          onClick={() => setStatus("failed")}
          disabled={status !== null}
          className={`
          flex-1 py-1.5 text-sm rounded-md transition-colors
          ${
            status === "failed"
              ? "bg-red-500/20 text-red-400 border border-red-500/40 cursor-not-allowed"
              : "bg-rose-500/10 text-rose-400 border border-rose-500/30 hover:bg-rose-500/20"
          }
        `}
        >
          {status === "failed" ? "Task Failed" : "Mark as Failed"}
        </button>
      </div>
    </div>
  );
};
