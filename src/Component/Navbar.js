import React from 'react';
import {NavLink,Link} from 'react-router-dom';
import { useAuth } from './auth';

const Navbar = () => {

    let navLinkStyle=({isActive})=>{
        return {
            fontWeight:isActive ? 'bold':'normal',
            color:isActive ? 'red' :'black'
        }
    }


    const auth=useAuth()
  return (
    <nav className='primary-nav'>
      <NavLink style={navLinkStyle} to='/' >Home</NavLink>
      <NavLink style={navLinkStyle} to='/about' >About</NavLink>
      <NavLink style={navLinkStyle} to='/product' >Products</NavLink>
      <NavLink style={navLinkStyle} to='/profile' >Profile</NavLink>

      {
        !auth.user && (
          <NavLink style={navLinkStyle} to='/login' >Login</NavLink>
        )
      }
    </nav>
  )
}

export default Navbar
