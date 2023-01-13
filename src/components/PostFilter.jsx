import React, { useState, useEffect } from "react";
import Inp from './UI/input/Inp'
import Slc from './UI/select/Slc'
import MainService from '../API/MainService'

const PostFilter = ({filter, setFilter, userId, setUserId}) => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetchUsers()
}, []) 

  async function fetchUsers() {
      const userFetch = await MainService.getAll()
      setUsers(userFetch)

  }


  const options = users.reduce((acc, user) => {
    acc.push({value: user.id, name: user.name})
    return acc
  }, [])


    return(
        <div>
        <Inp 
        value={filter}
        onChange={e => setFilter(e.target.value)}
        placeholder='Поиск...'
        />
        <Slc
        value= {userId}
        onChange={selectedId => setUserId(selectedId)}
        defaultValue="Выберите пользователя"
        options={[...options,
          {value: 'nobody', name: 'Пользователь не выбран'},

        ]}
        />
      </div>
    )
}

export default PostFilter