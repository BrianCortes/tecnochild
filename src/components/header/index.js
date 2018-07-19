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
        <img style={{ margin: 0 }} src={Image} width="50px" />
        <h1 className="header-eslogan">TecnoChild</h1>
      </div>
      <div className="header-links">
        <h4>Consejos</h4>
      </div>
    </div> 
  </div>
)

export default Header
