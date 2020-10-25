import React from 'react'
import logo from '../img/logo.png';
// import Navbar from 'react-bulma-components/lib/components/navbar';

export default function Navbar() {
  const [isActive, setisActive] = React.useState(false)
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
            <a className="navbar-item" href="#">
            <img src={logo} alt="" width="112" height="28" />
            </a>
            <a
  onClick={() => {
    setisActive(!isActive)
  }}
  role='button'
  className={`navbar-burger burger ${isActive ? 'is-active' : ''}`}
  aria-label='menu'
  aria-expanded='false'
  data-target='navbarBasicExample'
>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
        </div>
        <div id='navbarBasicExample' className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
          <div className="navbar-end">
            <a className="navbar-item">
                Home
            </a>
            <a className="navbar-item">
            Guestbook
            </a>
            <a className="navbar-item">
            Location
            </a>
            <a className="navbar-item">
            Registry
            </a>
           </div>
        </div>
    </nav>
    )
  }
