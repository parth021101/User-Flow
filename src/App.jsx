import React, { useState } from "react";
import Form from "./components/Form";
import UserData from "./components/UserData";
import NavBar from "./components/NavBar";

const App = () => {
  const [showForm, setShowForm] = useState(false);
  const [showUserCard, setShowUserCard] = useState([]);

  return (
    <div className="h-screen bg-[#444] text-white relative">
      <NavBar setShowForm={setShowForm} />
      {showForm && (
        <Form setShowForm={setShowForm} setShowUserCard={setShowUserCard} />
      )}
      <UserData setShowUserCard={setShowUserCard} showUserCard={showUserCard} />
    </div>
  );
};

export default App;
