import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import { ReactComponent as Hamburger} from '../../assets/icons/hamburger.svg'

const Navbar = () => {
  return (
      <nav>
          <Link to="/" className="title">
              <i class="ri-admin-fill"></i> Admin
          </Link>
        
          <ul >
              <li>
          <Hamburger style={{
            fill: 'white',
        marginLeft:'15px' }} />
              </li>

           
          </ul>
      </nav>
  )
}

export default Navbar