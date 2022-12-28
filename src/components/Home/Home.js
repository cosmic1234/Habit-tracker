import React, { useState } from "react";
import Form from "../HabitForm/Form";
import Class from "../../styles/Home.module.css";

const Home = () => {
  const [showForm, setShowForm] = useState(false);

  function showformHandler(e) {
    e.preventDefault();
    setShowForm(true);
  }
  return (
    <div className={Class.container}>
      {showForm ? <Form /> :
        (
          <button onClick={showformHandler} type="button">
            Add New Habit
          </button>
        )}
    </div>
  );
};

export default Home;
