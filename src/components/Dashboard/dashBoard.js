import React, { useEffect, useState } from "react";
import Habit from "../Habit/Habit";
import store from "../../store/store";
import Class from "../../styles/dashBoard.module.css";
import { updatingHabits } from "../../store/actions";

const DashBoard = () => {
  const [habits, setHabits] = useState([]);

  useEffect(() => {
    store.dispatch(updatingHabits());

    setHabits(store.getState());
  }, []);

  function reRender() {
    setHabits(store.getState());
  }
  return (
    <div className={Class.container}>
      <h1>Your Habits List</h1>
      {habits.length === 0 ? (
        <h1 className={Class.result}>
          No Habits added.
        </h1>
      ) : (
        habits.map((habit) => {
          return <Habit reRender={reRender} {...habit} key={habit.id} />;
        })
      )}
    </div>
  );
};

export default DashBoard;
