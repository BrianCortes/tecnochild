import React from 'react'
import './styles.sass'

const Colums = ({ children, reverse }) => (
  <div className={reverse ? 'container-general reverse' : 'container-general'}>
    <div className="container-left">
      { children[0] && children[0]}
    </div>
    <div className="container-right">
      <div className="container-image">
        { children[1] && children[1]}
      </div>
    </div>
  </div>
)

export default Colums
