import React from "react";

const NavBar = ({ setShowForm }) => {
  const handleClick = () => {
    setShowForm(true);
  };
  return (
    <div className="border-b border-[#807e7e] p-5 flex items-center justify-between">
      <h1 className="text-3xl font-medium tracking-wide whitespace-nowrap">
        UserFlow
      </h1>
      <button onClick={handleClick} className="px-3 py-2 rounded-lg font-medium tracking-wide bg-blue-600 cursor-pointer transition hover:bg-blue-700">
        Create User
      </button>
    </div>
  );
};

export default NavBar;
