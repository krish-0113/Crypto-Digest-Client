import React from "react";

function Login() {
  return (
    <div className="flex justify-center items-center h-screen px-4">
      <form className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl text-white font-bold mb-6 text-center">Login</h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 rounded bg-gray-700 text-white focus:outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-6 rounded bg-gray-700 text-white focus:outline-none"
        />
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-400 to-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Sign In
        </button>
      </form>
    </div>
  );
}

export default Login;
