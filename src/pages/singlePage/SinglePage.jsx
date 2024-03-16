import React from 'react'
import "./singlePage.scss"
import Slider from '../../components/slider/Slider'
import { singlePostData, userData } from '../../data/dummyData'
import Map from '../../components/map/Map'
import utility from "../../image/utility.png"
import pet from "../../image/pet.png"
import fee from "../../image/fee.png"
import size from "../../image/size.png"
import bed from "../../image/bed.png"
import bath from "../../image/bath.png"
import school from "../../image/school.png"
import save from "../../image/save.png"
import chat from "../../image/chat.png"
import pin from "../../image/pin.png"
const SinglePage = () => {
  const data=singlePostData
  const user=userData
  
  return (
    <div className="singlePage">
    <div className="details">
      <div className="wrapper">
        <Slider images={data.images} />
        <div className="info">
          <div className="top">
            <div className="post">
              <h1>{data.title}</h1>
              <div className="address">
                <img src={pin} alt="" />
                <span>{data.address}</span>
              </div>
              <div className="price">$ {data.price}</div>
            </div>
            <div className="user">
              <img src={user.img} alt="" />
              <span>{user.name}</span>
            </div>
          </div>
          <div className="bottom">{data.description}</div>
        </div>
      </div>
    </div>
    <div className="features">
      <div className="wrapper">
        <p className="title">General</p>
        <div className="listVertical">
          <div className="feature">
            <img src={utility} alt="" />
            <div className="featureText">
              <span>Utilities</span>
              <p>Renter is responsible</p>
            </div>
          </div>
          <div className="feature">
            <img src={pet} alt="" />
            <div className="featureText">
              <span>Pet Policy</span>
              <p>Pets Allowed</p>
            </div>
          </div>
          <div className="feature">
            <img src={fee} alt="" />
            <div className="featureText">
              <span>Property Fees</span>
              <p>Must have 3x the rent in total household income</p>
            </div>
          </div>
        </div>
        <p className="title">Sizes</p>
        <div className="sizes">
          <div className="size">
            <img src={size} alt="" />
            <span>80 sqft</span>
          </div>
          <div className="size">
            <img src={bed} alt="" />
            <span>2 beds</span>
          </div>
          <div className="size">
            <img src={bath} alt="" />
            <span>1 bathroom</span>
          </div>
        </div>
        <p className="title">Nearby Places</p>
        <div className="listHorizontal">
          <div className="feature">
            <img src={school} alt="" />
            <div className="featureText">
              <span>School</span>
              <p>250m away</p>
            </div>
          </div>
          <div className="feature">
            <img src={pet} alt="" />
            <div className="featureText">
              <span>Bus Stop</span>
              <p>100m away</p>
            </div>
          </div>
          <div className="feature">
            <img src={fee} alt="" />
            <div className="featureText">
              <span>Restaurant</span>
              <p>200m away</p>
            </div>
          </div>
        </div>
        <p className="title">Location</p>
        <div className="mapContainer">
          <Map data={[data]} />
        </div>
        <div className="buttons">
          <button>
            <img src={chat} alt="" />
            Send a Message
          </button>
          <button>
            <img src={save}alt="" />
            Save the Place
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default SinglePage