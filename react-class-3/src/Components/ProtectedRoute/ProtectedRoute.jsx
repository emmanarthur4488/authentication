import React from 'react'
import {Navigate, Outlet} from 'react-router-dom'

const userAuth = () =>{
  let userDetails = JSON.parse(sessionStorage.getItem("userDetails"))
  return userDetails
}

const ProtectedRoute = () => {
  const isAuth = userAuth()

  return isAuth ? <Outlet/> : <Navigate to='/signup'/>
}

export default ProtectedRoute
