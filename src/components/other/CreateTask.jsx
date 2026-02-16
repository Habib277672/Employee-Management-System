import React, { useState } from "react";
import { NewTask } from "../TaskList/NewTask";
import { AuthContext } from "../../context/AuthProvider";
import { useContext } from "react";

export const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  const [newTask, setNewTask] = useState({
    taskTitle: "",
    taskDate: "",
    assignTo: "",
    category: "",
    taskDescription: "",
  });

  // useEffect(() => {
  //   console.log(userData);
  // }, []);

  const submitHandler = (e) => {
    e.preventDefault();

    const data = userData || [];

    data.forEach((element) => {
      // console.log(element, newTask);
      if (newTask.assignTo === element.firstName) {
        element.tasks.push({
          taskTitle: newTask.taskTitle,
          taskDate: newTask.taskDate,
          category: newTask.category,
          taskDescription: newTask.taskDescription,
          active: false,
          newTask: true,
          completed: false,
          failed: false,
        });
        element.taskCounts.newTask = element.taskCounts.newTask + 1;
      }
    });

    setUserData(data);
    console.log(data);
    setNewTask({
      taskTitle: "",
      taskDate: "",
      assignTo: "",
      category: "",
      taskDescription: "",
    });
  };

  return (
    <div className="p-5 bg-[#1c1c1c] mt-7 rounded">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex flex-wrap items-start justify-between w-full"
      >
        {/* left section */}
        <div className="w-full md:w-1/2">
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
            <input
              value={newTask.taskTitle}
              onChange={(e) =>
                setNewTask({ ...newTask, taskTitle: e.target.value })
              }
              className="text-md py-1 px-2 w-full h-10 md:w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4"
              type="text"
              placeholder="Make a UI Design"
            />
          </div>

          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
            <input
              value={newTask.taskDate}
              onChange={(e) =>
                setNewTask({ ...newTask, taskDate: e.target.value })
              }
              placeholder="Enter Date"
              className="text-md py-1 px-2 w-full h-10 md:w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4"
              type="date"
            />
          </div>

          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Assign To</h3>
            <input
              value={newTask.assignTo}
              onChange={(e) =>
                setNewTask({ ...newTask, assignTo: e.target.value })
              }
              className="text-md py-1 px-2 w-full h-10 md:w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4"
              type="text"
              placeholder="Employee Name"
            />
          </div>

          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
            <input
              value={newTask.category}
              onChange={(e) =>
                setNewTask({ ...newTask, category: e.target.value })
              }
              className="text-md py-1 px-2 w-full h-10 md:w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4"
              type="text"
              placeholder="Design, Development, etc.."
            />
          </div>
        </div>

        {/* right section */}
        <div className="w-full md:w-1/2 flex flex-col items-start mt-4 md:mt-0">
          <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
          <textarea
            value={newTask.taskDescription}
            onChange={(e) =>
              setNewTask({ ...newTask, taskDescription: e.target.value })
            }
            className="w-full h-68 text-md py-2 px-4 rounded outline-none bg-transparent border border-gray-400 resize-none"
            cols="10"
            rows="10"
            placeholder="Detailed Description of Task (Max 500 words)"
          ></textarea>
        </div>

        {/* button */}
        <div className="flex justify-center  w-full md:mt-4 h-full">
          <button
            className="bg-emerald-500 hover:bg-emerald-600 py-3 px-5 rounded text-sm mt-4 w-full "
            type="submit"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};
