import React from 'react'
import './welcome.css'

const Welcome = () => {

    let userDetails = JSON.parse(sessionStorage.getItem("userDetails"))
  return (
    <div className="welcome">
      <h1>welcome to Libraree, {userDetails.name} </h1>
      <p>You are from {userDetails.country} </p>
    </div>
  )
}

export default Welcome
