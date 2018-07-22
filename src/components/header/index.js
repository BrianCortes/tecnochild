import React from 'react'
import Link from 'gatsby-link'
import Image from '../../assets/baby.png'
import './style.sass'

const Header = ({ siteTitle }) => (
  <div
    className='header-container'
  >
    <div className="header-menu">
      <div className="header-logo-eslogan">
        <Link className="menu" to="/">
          <img style={{ margin: 0 }} src={Image} width="50px" />
          <h1 className="header-eslogan">TecnoChild</h1>
        </Link>
      </div>
      <div className="header-links">
        <Link to="/consejos">
          <h4>Consejos</h4>
        </Link>
        <Link to="/relaciones">
          <h4>Relaciones</h4>
        </Link>
        <Link to="/competencias">
          <h4>Competencias</h4>
        </Link>
        <Link to="/importancia">
          <h4>Importancia</h4>
        </Link>
        <Link to="/juegos">
          <h4>Juegos</h4>
        </Link>
      </div>
    </div>
  </div>
)

export default Header
