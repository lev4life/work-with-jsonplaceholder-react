import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return(
        <div className='navbar'>
          <Link to='/main' className='navbar__logo'>MyReact</Link>
        <div className='navbar__links'>
          <Link to='/main' className='navbar__links__btns'>На главную</Link>
          <Link to='/posts' className='navbar__links__btns'>Посты</Link>
          <Link to='/albums' className='navbar__links__btns'>Альбом</Link>
        </div>
      </div>
    )
}

export default Navbar