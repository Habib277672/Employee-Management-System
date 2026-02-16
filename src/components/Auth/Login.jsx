import React, { useState } from "react";

export const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setpassword("");
  };
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#0f0f0f] px-4">
      <div className="w-full max-w-md bg-[#1c1c1c] border border-emerald-600/40 rounded-2xl p-6 sm:p-10 shadow-xl">
        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-white">Login</h1>
          <p className="text-sm text-gray-400 mt-1">Access your dashboard</p>
        </div>

        {/* Form */}
        <form
          onSubmit={(e) => submitHandler(e)}
          className="flex flex-col gap-4"
        >
          <input
            className="
          w-full
          bg-transparent
          border border-gray-600
          rounded-lg
          px-4 py-3
          text-sm sm:text-base
          text-white
          placeholder-gray-400
          outline-none
          focus:border-emerald-500
          focus:ring-1 focus:ring-emerald-500
          transition
        "
            type="email"
            placeholder="Email address"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className="
          w-full
          bg-transparent
          border border-gray-600
          rounded-lg
          px-4 py-3
          text-sm sm:text-base
          text-white
          placeholder-gray-400
          outline-none
          focus:border-emerald-500
          focus:ring-1 focus:ring-emerald-500
          transition
        "
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />

          <button
            type="submit"
            className="
          mt-4
          bg-linear-to-r from-emerald-500 to-emerald-600
          hover:from-emerald-600 hover:to-emerald-700
          text-white
          font-medium
          text-sm sm:text-base
          py-3
          rounded-lg
          transition-all duration-200
          hover:scale-[1.02]
          focus:outline-none
          focus:ring-2 focus:ring-emerald-500
          shadow-lg
        "
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
