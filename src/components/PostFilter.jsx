import React from 'react'
import Inp from './UI/input/Inp'
import Slc from './UI/select/Slc'

const PostFilter = ({filter, setFilter}) => {
    return(
        <div>
        <Inp 
        value={filter.query}
        onChange={e => setFilter({...filter, query: e.target.value})}
        placeholder='Поиск...'
        />
        <Slc
        value={filter.sort}
        onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
        defaultValue="Сортировка"
        options={[
          {value: 'title', name: 'По названию'},
          {value: 'body', name: 'По описанию'}
        ]}
        />
      </div>
    )
}

export default PostFilter