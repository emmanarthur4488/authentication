import React from 'react'
import './box.css'


const Box = ({foods}) => {
  return (
    <div className="box">
      <h3>{foods[2].foodname}</h3>
      <h3>{foods[2].price}</h3>
    </div>
  )
}

export default Box
