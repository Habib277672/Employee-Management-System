import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

export const AllTask = () => {
  const [userData] = useContext(AuthContext);

  return (
    <div className="bg-[#1c1c1c] p-5 mt-5 rounded-lg h-60 shadow-lg overflow-hidden">
      {/* Scroll wrapper for horizontal scroll */}
      <div className="h-full overflow-x-auto scrollbar-hide">
        <div className="min-w-175 h-full">
          {/* Header */}
          <div className="bg-[#2a2a2a] py-2 px-4 mb-3 flex justify-between rounded-md border border-[#333] text-gray-200">
            <h2 className="w-1/5 font-semibold">Employee Name</h2>
            <h3 className="w-1/5 font-semibold">New Task</h3>
            <h5 className="w-1/5 font-semibold">Active Task</h5>
            <h5 className="w-1/5 font-semibold">Completed</h5>
            <h5 className="w-1/5 font-semibold">Failed</h5>
          </div>

          {/* Body with vertical scroll */}
          <div
            id="tasklist"
            className="h-[calc(100%-50px)] overflow-y-auto overflow-x-hidden pr-1 scrollbar-hide"
          >
            {userData.map((elem) => (
              <div
                key={elem.id}
                className="bg-[#232323] hover:bg-[#2b2b2b] transition-colors duration-200 py-2 px-4 mb-2 flex justify-between rounded-md text-gray-300 border border-[#2f2f2f]"
              >
                <h2 className="w-1/5 font-medium">{elem.firstName}</h2>
                <h3 className="w-1/5 font-medium">{elem.taskCounts.newTask}</h3>
                <h5 className="w-1/5 font-medium">{elem.taskCounts.active}</h5>
                <h5 className="w-1/5 font-medium">
                  {elem.taskCounts.completed}
                </h5>
                <h5 className="w-1/5 font-medium">{elem.taskCounts.failed}</h5>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
