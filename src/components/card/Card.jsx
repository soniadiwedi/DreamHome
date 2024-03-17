import React from 'react'
import {Link} from "react-router-dom"
import "./card.scss"
import pin from "../../image/pin.png"
import chat from "../../image/chat.png"
import bath from "../../image/bath.png"
import save from "../../image/save.png"
import bed from "../../image/bed.png"
const Card = ({item}) => {

 return (
  <div className="card">
    <Link to={`/${item.id}`} className="imageContainer">
      <img src={item.img} alt="" />
    </Link>
    <div className="textContainer">
      <h2 className="title">
        <Link to={`/${item.id}`}>{item.title}</Link>
      </h2>
      <p className="address">
        <img src={pin} alt="" />
        <span>{item.address}</span>
      </p>
      <p className="price">$ {item.price}</p>
      <div className="bottom">
        <div className="features">
          <div className="feature">
            <img src={bed} alt="" />
            <span>{item.bedroom} bedroom</span>
          </div>
          <div className="feature">
            <img src={bath} alt="" />
            <span>{item.bathroom} bathroom</span>
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
);
}

export default Card