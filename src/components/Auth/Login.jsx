import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <div className="flex h-screen w-screen justify-center items-center p-4">
        <div className="border-2 rounded-xl p-6 sm:p-10 md:p-20 border-emerald-600 w-full max-w-[400px] md:max-w-[500px]">
          <form
            className="flex flex-col items-center justify-center w-full"
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
              type="email"
              className="w-full text-white border-2 outline-none bg-transparent border-emerald-600 text-base sm:text-lg md:text-xl rounded-full py-1.5 sm:py-2 px-4 sm:px-5 placeholder:text-gray-400"
              placeholder="Enter your email"
            />
            <input
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
              className="w-full text-white border-2 outline-none bg-transparent border-emerald-600 text-base sm:text-lg md:text-xl rounded-full py-1.5 sm:py-2 px-4 sm:px-5 placeholder:text-gray-400 mt-3"
              placeholder="Enter your Password"
            />
            <button className="w-full sm:w-auto mt-5 text-white outline-none bg-emerald-600 hover:bg-emerald-700 transition-colors text-base sm:text-lg md:text-xl rounded-full py-1.5 sm:py-2 px-8 sm:px-10 md:px-12">
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
