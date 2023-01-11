import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return(
        <div className='navbar'>
        <div className='navbar__links'>
          <Link to='/main'>На главную</Link>
          <Link to='/posts'>Посты</Link>
          <Link to='/albums'>Альбом</Link>
        </div>
      </div>
    )
}

export default Navbar