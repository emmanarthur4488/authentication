import React from 'react'
import './home.css'
import Rect2 from '/src/IMG/Rect2.png'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div className="home">
      <div>
        <h1>Join the online <br/> library</h1>
        <p>
          Libraree is a pltform where you get access to qulity books <br/>
          online, join the community of online readers, get the latest <br/> information on new books of interest.
        </p>
        <Link to='/signup'><button>Get started for free</button></Link>
      </div>
      <div className="imgBox">
        <img src={Rect2} alt=""/>
      </div>
      
    </div>
  )
}

export default Home
