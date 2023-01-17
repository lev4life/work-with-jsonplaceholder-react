import React from "react";
import Btn from "./UI/button/Btn";

const MainItem = (props) => {
    console.log(props);
  return (
    <div className="user">
      <div className="user__content">
       <div><strong>{props.number}. Имя: </strong>{props.user.name}</div> 
       <div><strong>Город: </strong>{props.user.address.city}</div>
        <div><strong>Эл. почта: </strong>{props.user.email}</div>
        <div><strong>Телефон: </strong>{props.user.phone}</div>
      </div>
      <div className="user__btns">
        <Btn onClick={() => props.remove(props.user)}>Удалить</Btn>
      </div>
    </div>
  );
};

export default MainItem;
