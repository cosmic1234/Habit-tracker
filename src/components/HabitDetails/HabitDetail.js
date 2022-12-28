import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import store from "../../store/store";
import ShowWeek from "../showWeek/showWeek";
import Class from "../../styles/HabitDetail.module.css";

const HabitDetail = () => {
  const params = useParams();

  const [habitDetail, setHabitDetail] = useState({});
  useEffect(() => {
    const habit = store.getState();
    const habitDetail = habit.filter((h) => {
      return h.id === parseFloat(params.id);
    });
    setHabitDetail(...habitDetail);
  }, [params.id]);
  return (
    <div>
      <div className={Class.headingDiv}>
        <h1 className={Class.head}>Habit Name: </h1>
        <h1 className={Class.head}>{habitDetail.title}</h1>
      </div>
      <div className={Class.detail}>
        <p>Category: {habitDetail.category}</p>
        <p>
          Count: {habitDetail.workDone}/{habitDetail.week?.length}
        </p>
      </div>
      <div className={Class.weeks}>
        {habitDetail.week?.map((day, index) => {
          return <ShowWeek habit={habitDetail} {...day} index={index} />;
        })}
      </div>
    </div>
  );
};

export default HabitDetail;
