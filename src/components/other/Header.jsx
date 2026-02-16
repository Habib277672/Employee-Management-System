import React from "react";

export const Header = (props) => {
  const username = props.data?.firstName || "Admin";

  const logOutUser = () => {
    localStorage.removeItem("loggedInUser");
    if (typeof props.changeUser === "function") props.changeUser(null);
  };

  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium">
        Hello
        <br /> <span className="font-bold text-3xl">{username} 👋</span>
      </h1>
      <button
        onClick={logOutUser}
        className="bg-red-600 text-lg font-medium px-5 py-2 rounded-sm"
      >
        Log Out
      </button>
    </div>
  );
};
