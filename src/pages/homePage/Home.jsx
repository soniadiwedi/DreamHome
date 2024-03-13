import React from 'react'
import "./home.scss"
import bg from '../../image/bg.png';
import SearchBar from '../../components/searchBar/SearchBar';
const Home = () => {
  return (
    <div className='home'>
        <div className="textContainer">
            <div className="wrapper">
            <h1 className='title'>
                Find Real Estate and find your Dream Place.
            </h1>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias reprehenderit dolore recusandae, dicta tempore magni officia facere vel inventore nostrum. Cum, repudiandae rem illum obcaecati quasi saepe nam consectetur quod?
            </p>
            </div>
           <SearchBar/>
        </div>
        
        <div className="imgContainer">
            <img src={bg} alt="" />
        </div>

    </div>
  )
}

export default Home