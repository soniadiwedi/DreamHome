import React from 'react'
import Card from '../card/Card'
import "./list.scss"
import { listData } from '../../data/dummyData'
const List = () => {
    const data=listData
    console.log(data.price);
    return (
        <div className='list'>
          
          {data?.map(item=>(
            <Card key={item.id} el={item}/>
          ))}
        </div>
      )
}

export default List