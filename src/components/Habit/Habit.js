import React from "react";
import { useNavigate } from "react-router-dom";
import { removingHabit } from "../../store/actions";
import store from "../../store/store";
import Class from "../../styles/Habit.module.css";
const Habit = (props) => {
  const navigation = useNavigate();

  function removeHabit(id) {
    store.dispatch(removingHabit(id));
    props.reRender();
  }
  function DetailHandler(id) {
    navigation(`habit/${id}/detail`);
  }
  return (
    <div className={Class.container}>
      <div>
        <h3>Habit Name:</h3>
        <h3>{props.title}</h3>
      </div>
      <div>
        <p>Category: {props.category}</p>
        <p>
          count: {props.workDone}/{props.week.length}
        </p>
        <div className={Class.deleteDiv}
          onClick={(e) => {
            e.preventDefault();
            removeHabit(props.id);
          }}

        >Delete</div>
        <button
          onClick={(e) => {
            e.preventDefault();
            DetailHandler(props.id);
          }}
          type="button"
        >
          See Details
        </button>
      </div>
    </div>
  );
};

export default Habit;
