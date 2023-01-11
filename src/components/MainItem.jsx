import React from "react";
import Btn from "./UI/button/Btn";

const MainItem = (props) => {
    console.log(props);
  return (
    <div className="user">
      <div className="user__content">
        <strong>{props.number}. {props.user.name}</strong>
      </div>
      <div className="user__btns">
        <Btn onClick={() => props.remove(props.user)}>Удалить</Btn>
      </div>
    </div>
  );
};

export default MainItem;
