import React from "react";

const UserData = ({ showUserCard }) => {
  return (
    <div className="mt-4 min-h-100 text-black flex gap-4 p-4">
      {showUserCard.map((user) => {
        return (
          <div key={user.id} className="bg-[#f5f3f3] p-4 h-fit w-fit flex items-center rounded-lg gap-3">
            <img
              className="w-15 h-15 bg-white rounded-full"
              src="/default_profilePicture.jpg"
              alt="Profile Icon"
            />
            <div>
              <h1 className="text-lg font-bold tracking-wide">{user.fullName}</h1>
              <h2 className="text-sm font-medium tracking-wide">
                {user.emailID}
              </h2>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default UserData;
