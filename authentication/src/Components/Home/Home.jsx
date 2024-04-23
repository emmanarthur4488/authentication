import React from 'react'
import './home.css'
import Xbox from '/src/IMG/xbox.jpg'
import {Link} from "react-router-dom"

const Home = () => {
  return (
    <div>
        <div>
            <img className="banner" src={Xbox} alt=""/>
            <div className="home-note">
                <h1>GramDech, the frontend development solution</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit consequuntur, <br/> ut explicabo laudantium animi sit? Reprehenderit nobis, sunt ullam sed blanditiis sequi consequuntur <br/> quod maiores quam, a aut recusandae dignissimos?</p>
                <Link to='signup'><button className="btn">Get Stated</button></Link>
            </div>
        </div>
    </div>
  )
}

export default Home
