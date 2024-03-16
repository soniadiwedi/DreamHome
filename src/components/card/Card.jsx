import React from 'react'
import {Link} from "react-router-dom"
import "./card.scss"
import pin from "../../image/pin.png"
import chat from "../../image/chat.png"
import bath from "../../image/bath.png"
import save from "../../image/save.png"
import bed from "../../image/bed.png"
const Card = ({el}) => {
 
  return (
    <div className='card'>
      <Link to={`/${el.id}`} className="imageContainer">
        <img src={el.img} alt="" />
      </Link>
      <div className="textContainer">
        <h2 className='title'>
          <Link to={`/${el.id}`}>{el.title}</Link>
        </h2>
        <p className="address">
          <img src={pin} alt="" />
          <span>{el.address}</span>
        </p>
        <p className="price">${el.price}</p>
        <div className="bottom">
        <div className="features">
            <div className="feature">
              <img src={bed} alt="" />
              <span>{el.bedroom} bedroom</span>
            </div>
          <div className="feature">
            
            <img src={bath} alt="" />
           <span>{el.bathroom} bathroom</span>
          </div>
        </div>

        <div className="icons">
          <div className="icon">
            <img src={save} alt="" />
          </div>
          <div className="icon">
            <img src={chat} alt="" />
          </div>
          </div>
        </div>
      
      </div>
    </div>
  )
}

export default Card