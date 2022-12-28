import React, { useRef } from "react";
import store from "../../store/store";
import { useNavigate } from "react-router-dom";
import Class from "../../styles/Form.module.css";
import { addingHabit } from "../../store/actions";
import { Store } from "react-notifications-component";

const Form = () => {
  const habitRef = useRef();
  const categoryRef = useRef();
  const navigation = useNavigate();

  function addHabit(e) {
    const data = {
      title: habitRef.current.value,
      category: categoryRef.current.value,
    };
    if (data.title.trim() === "" || data.category.trim() === "") {
      Store.addNotification({
        title: "Wrong!!",
        message: "Please enter valid information",
        type: "info",
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 5000,
          onScreen: true,
        },
      });


      return;
    }

    Store.addNotification({
      title: "Success!!",
      message: "Habit Saved",
      type: "info",
      insert: "top",
      container: "top-right",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 2500,
        onScreen: true,
      },
    });


    store.dispatch(addingHabit(data));

    setTimeout(() => {
      navigation("/dashboard");

    }, 2700);
  }

  return (
    <form action="" className={Class.container}>
      <div>
        <label> Habit Name: </label>
        <br />
        <input type={"text"} ref={habitRef} required placeholder="Habit name..." />
      </div>
      <div>
        <label> Habit Category: </label>
        <br />
        <input
          type={"text"}
          ref={categoryRef}
          required
          placeholder="Category..."
        />
      </div>
      <button className="submitButton" onClick={addHabit} type="button">
        Save
      </button>
    </form>
  );
};

export default Form;
