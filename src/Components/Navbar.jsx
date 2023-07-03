import React, {useState, useEffect} from 'react'
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)


  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }

  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth)

    return () => {
        window.removeEventListener('resize', changeWidth)
    }

  }, [])

  return (
    <nav>
      {(toggleMenu || screenWidth > 500) && (
      <ul className="list">
       
      <li className="items"><Link to="/">Home</Link></li>
      <li className="items"><Link to="/register">Register</Link></li>
      <li className="items"><Link to="/list">Registered-Emp.</Link></li>
    </ul>
      )}

    {(toggleMenu ? <> 
        <button onClick={toggleNav} className="btn"><i class="fa-solid fa-xmark"></i></button>
     </>:
     <>
     <button onClick={toggleNav} className="btn"><i class="fa-solid fa-bars"></i></button>
    
    </>)}
    </nav>
  )
}