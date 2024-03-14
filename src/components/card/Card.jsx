import React from 'react'
import {Link} from "react-router-dom"
import "./card.scss"
const Card = ({el}) => {
  console.log("object",el);
  return (
    <div className='card'>
      <Link to={`/${el.id}`} className="imageContainer">
        <img src={el.img} alt="" />
      </Link>
      <div className="textContainer">
        <h2 className='title'>

        </h2>
      </div>
    </div>
  )
}

export default Card