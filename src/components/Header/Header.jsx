import React from 'react'
import user from '../../images/user.png'
import './Header.scss'
import {Link} from 'react-router-dom'
const Header = () => {
  return (
    <div className='header'>
   <Link to='/'>
     <div className='logo'>Movie App</div>
     </Link>
     <div className="user-image">
      <img src={user} alt="user" />
     </div>
    </div>
  )
}

export default Header
