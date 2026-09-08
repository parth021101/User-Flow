import React, { useState } from "react";
import { X } from "lucide-react";

const Form = ({ setShowForm, setShowUserCard }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    emailID: "",
  });

  const [formErrors, setFormErrors] = useState({
    fullName: "",
    emailID: "",
  });

  const validate = () => {
    const newErrors = {};

    if (!formData.fullName.trim() || !formData.emailID.trim()) {
      newErrors.errorMessage = "Please fill out all required fields (*)!";
    }

    if (!formData.emailID.includes("@")) {
      newErrors.emailID = "Please enter a valid Email!";
    }

    return newErrors;
  };

  const handleClick = () => {
    setShowForm(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    setFormErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const newUser = { ...formData, id: Date.now() };
      setShowUserCard((prev) => [...prev, newUser]);
      setFormData({
        fullName: "",
        emailID: "",
      });
      setShowForm(false);
    }
  };
  return (
    <div className="h-screen w-screen flex text-black items-center justify-center bg-[#00000052] backdrop-blur-[2px] absolute top-0 left-0">
      <div className="bg-white w-full max-w-100 pt-8 pb-8 pl-4 pr-4 rounded-lg flex flex-col gap-4 relative">
        <X
          onClick={handleClick}
          className="absolute top-2 right-2 cursor-pointer"
          size={22}
        />
        <h1 className="mb-1 text-2xl text-center tracking-wide font-medium">
          Create New User
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <p className=" ml-1 font-medium whitespace-nowrap tracking-wide">
              Full Name<span className="text-red-500">*</span>
            </p>
            <input
              onChange={handleChange}
              name="fullName"
              className="w-full border p-2 rounded-lg text-sm"
              type="text"
              placeholder="Rahul Sharma"
              value={formData.fullName}
            />
          </div>
          <div className="flex flex-col gap-1">
            <p className="ml-1 font-medium whitespace-nowrap tracking-wide">
              Email ID<span className="text-red-500">*</span>
            </p>
            <input
              onChange={handleChange}
              name="emailID"
              className="w-full border p-2 rounded-lg text-sm"
              type="text"
              placeholder="rahulsharma@gmail.com"
              value={formData.emailID}
            />
          </div>
          <button className="mt-2 px-3 py-2 rounded-lg font-medium text-white tracking-wide bg-blue-600 cursor-pointer transition hover:bg-blue-700">
            Add User
          </button>
          <div>
            {(formErrors.errorMessage || formErrors.emailID) && (
              <p className="text-red-500 ml-1 mt-1 text-center font-medium text-sm whitespace-nowrap tracking-wide">
                {formErrors.errorMessage || formErrors.emailID}
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
