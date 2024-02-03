import React from 'react'
import Rice from '/src/IMG/rice.jpg'
import {useParams} from 'react-router-dom'

const ProductDetails = ({foods}) => {

    const {name, price} = useParams()
  return (
    <div className="card-detail">
        <div className="card-detail-image">
            <img src={Rice} alt=""/>
        </div>
        <div className="card-detail-value">
            <h1>{name}</h1>
            <p>{price}</p>
        </div>
    </div>
  )
}

export default ProductDetails
