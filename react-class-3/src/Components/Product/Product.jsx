import React from 'react'
import './product.css'
import { Link } from 'react-router-dom'
import Box from '../Box/Box'



const Product = ({foods}) => {

    

  return (
    <div>
      <h1>This a product page</h1>
      <p>These are list of available food</p>

      <div className="card">
          {
              foods && foods.map((food) =>

              <div className="card-box">
                <Link to={food.foodname}>
                  <div className="card-image">
                    <img src={food.image} alt=""/>
                  </div>
                  <p>{food.foodname}</p>
                  <p>{food.price}</p>
                </Link>
              </div>
              )
          }
      </div>
      <Box foods={foods}/>
    </div>
  )
}

export default Product
