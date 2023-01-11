import React, { useState, useEffect } from "react";
import MainService from "../API/MainService";
import MainList from "../components/MainList";
import { useUsers } from "../hooks/useUsers";
import '../styles/App.css';


function Main() {
  const [users, setUsers] = useState([])
  const [filter] = useState({sort: '', query: ''})
  const sortedAndSerchedUsers = useUsers(users, filter.sort, filter.query)

  useEffect(() => {
    setTimeout(() => {
      fetchUsers()
    }, 2000)
  }, []) 


  async function fetchUsers() {
    const users = await MainService.getAll()
    setUsers(users)
  }

  const removeUser = (user) => {
    setUsers(users.filter(p => p.id !== user.id))
  }

  return (
    <div className="App">
      <h1 style={{textAlign: 'center'}}>Добро пожаловать!</h1>
      <h2>Наши пользователи:</h2>
      <MainList remove={removeUser} users={sortedAndSerchedUsers}/>
    </div>
  );
}

export default Main;
