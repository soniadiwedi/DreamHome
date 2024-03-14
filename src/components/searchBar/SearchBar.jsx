import React, { useState } from 'react'
import "./search.scss"
import serachicon from '../../image/search.png';

const types=["buy","rent"]
const SearchBar = () => {
    const [query,setQuery]=useState({
        type:"buy",
        location:"",
        minPrice:0,
        maxPrice:0
    })
    console.log(types);
    const switchType=(e)=>{
        setQuery((prev)=>({...prev,type:e}))
    }
  return (
    <div className='searchBar'>
        <div className="type">
            {types?.map((e)=>{   
            return <button key={e} onClick={()=>switchType(e)} className={query.type===e ?"active":""}>{e}</button>
            })
        }
        </div>
            <form>
            <input type="text" name='location' placeholder='City Location' />
            <input type="number" name='minPrice' min={0} max={10000000}placeholder='Min Price' />
            <input type="text" name='maxPrice' min={0} max={10000000} placeholder='Max price' />
                <button>
                    <img src={serachicon} alt="" />
                </button>
            </form>
    </div>
  )
}

export default SearchBar