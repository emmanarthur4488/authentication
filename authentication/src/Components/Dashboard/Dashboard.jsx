import React from 'react'
import './dashboard.css'
import {Link} from 'react-router-dom'


let userDetails = JSON.parse(sessionStorage.getItem("userDetails"))
const Dashboard = () => {
  return (
    <div>
        <div className="side-nav">
            <div className="heading">
                <h1> Welcome {userDetails.name}</h1>
            </div>
            <div className="side-links">
                <div className="sidelinks">
                    <i className="fa-regular fa-user"></i>
                    <Link to='/'><p>Home</p></Link>
                </div>
                <div className="sidelinks">
                    <i className="fa-solid fa-users"></i>
                    <Link to='/customer'><p>Services</p></Link>
                </div>
                <div className="sidelinks">
                    <i className="fa-solid fa-calendar-days"></i>
                    <p>Blog</p>
                </div>
                <div className="sidelinks">
                    <i className="fa-solid fa-bars-progress"></i>
                    <Link to='/bookstore'><p>About</p></Link>
                </div>
                <div className="sidelinks">
                    <i className="fa-solid fa-podcast"></i>
                    <p>Audio</p>
                </div>
                <div className="sidelinks">
                    <i className="fa-solid fa-heart-circle-check"></i>
                    <p>favorite</p>
                </div>
                <div className="sidelinks">
                    <i className="fa-solid fa-gear"></i>
                    <p>settings</p>
                </div>
                <div className="sidelinks">
                    <i className="fa-solid fa-message"></i>
                    <p>message</p>
                </div>
                <div className="sidelinks">
                    <i className="fa-solid fa-circle-question"></i>
                    <p>support</p>
                </div>
                <hr/>
                <Link to='/signup' className="link">
                    <div className="sidelinks">
                        <i className="fa-solid fa-right-from-bracket"></i>
                        <p>Log out</p>
                    </div>
                </Link>
            </div>
        </div>
       
      
    </div>
  )
}

export default Dashboard
