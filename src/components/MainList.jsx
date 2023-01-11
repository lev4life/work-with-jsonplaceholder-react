import React from "react";
import MainItem from "./MainItem";

const MainList = ({users, title, remove}) => {

  if(!users.length) {
      return(
        <h2 style={{textAlign: 'center', color: 'red'}}>
          Список пользоватей пуст!
        </h2>
      )
  }

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      {users.map((user, index) => (
        <MainItem remove={remove} number={index + 1} user={user} key={user.id} />
      ))}
    </div>
  );
};

export default MainList;
