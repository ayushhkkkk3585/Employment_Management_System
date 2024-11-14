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
      <div className="flex h-screen w-screen justify-center items-center p-4 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900">
        <div className="border-2 rounded-xl p-6 sm:p-10 md:p-20 border-emerald-600 w-full max-w-[400px] md:max-w-[500px] bg-zinc-900/50 backdrop-blur-sm shadow-lg shadow-zinc-900/50">
          <h1 className="text-3xl font-bold text-center mb-8 text-zinc-100">Welcome Back</h1>
          <p className="text-zinc-400 text-center mb-8">Please sign in to continue</p>
          <form
            className="flex flex-col items-center justify-center w-full space-y-6"
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
              className="w-full text-zinc-100 border-2 outline-none bg-zinc-900/50 border-emerald-600 focus:border-emerald-500 text-base sm:text-lg md:text-xl rounded-full py-1.5 sm:py-2 px-4 sm:px-5 placeholder:text-zinc-500 transition-colors shadow-inner shadow-zinc-900/20"
              placeholder="Enter your email"
            />
            <input
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
              className="w-full text-zinc-100 border-2 outline-none bg-zinc-900/50 border-emerald-600 focus:border-emerald-500 text-base sm:text-lg md:text-xl rounded-full py-1.5 sm:py-2 px-4 sm:px-5 placeholder:text-zinc-500 transition-colors shadow-inner shadow-zinc-900/20"
              placeholder="Enter your Password"
            />
            <button className="w-full sm:w-auto mt-5 text-white outline-none bg-emerald-600 hover:bg-emerald-500 transition-all duration-200 text-base sm:text-lg md:text-xl rounded-full py-1.5 sm:py-2 px-8 sm:px-10 md:px-12 shadow-lg shadow-zinc-900/50 hover:shadow-zinc-900/20 hover:-translate-y-0.5">
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;