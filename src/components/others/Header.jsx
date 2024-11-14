import React from "react";

const Header = (props) => {
  const logOutUser = () => {
    localStorage.setItem("loggedInUser", " ");
    props.changeUser("");
  };

  return (
    <>
      <div className="flex justify-between items-end p-2 sm:p-3 md:p-4">
        <h1 className="text-xl sm:text-2xl font-medium">
          Hey! <br />
          <span className="text-2xl sm:text-3xl md:text-4xl font-semibold">
            Username🚀
          </span>{" "}
        </h1>
        <button
          onClick={logOutUser}
          className="bg-red-500 hover:bg-red-600 transition-colors text-white px-2 sm:px-3 py-1.5 sm:py-2 rounded-md text-base sm:text-lg font-medium"
        >
          Log Out
        </button>
      </div>
    </>
  );
};

export default Header;
