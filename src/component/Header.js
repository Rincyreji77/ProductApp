import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>

<nav className="navbar navbar-expand-lg  nanbar-dark bg-success">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Product App</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="=navbar-nav">
        <li className='nav-item'> 
       
          <Link className="nav-link" to="/">AddProduct</Link>
          </li>
          <li className='nav-item'>
          <Link className="nav-link" to="/search">SearchProduct</Link>
          </li>
         
         
        </ul>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Header