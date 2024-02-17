import React from 'react'
import './dashboard.css'
import {Link} from 'react-router-dom'


let userDetails = JSON.parse(sessionStorage.getItem("userDetails"))
const Dashboard = () => {
  return (
    <div>
        <div className="side-nav">
            <div className="heading">
                <h1>welcome {userDetails.name}</h1>
            </div>
            <div className="side-links">
                <div className="sidelinks">
                    <i className="fa-regular fa-user"></i>
                    <Link to='/your-name'><p>your name</p></Link>
                </div>
                <div className="sidelinks">
                    <i className="fa-solid fa-users"></i>
                    <Link to='/customer'><p>customers</p></Link>
                </div>
                <div className="sidelinks">
                    <i className="fa-solid fa-calendar-days"></i>
                    <p>schedule</p>
                </div>
                <div className="sidelinks">
                    <i className="fa-solid fa-bars-progress"></i>
                    <p>bookkstore</p>
                </div>
                <div className="sidelinks">
                    <i className="fa-solid fa-podcast"></i>
                    <p>audio books</p>
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
                <div className="sidelinks">
                    <i className="fa-solid fa-right-from-bracket"></i>
                    <p>support</p>
                </div>
            </div>
        </div>
       
      
    </div>
  )
}

export default Dashboard
