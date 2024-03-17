import React from 'react'
import Card from '../card/Card'
import "./list.scss"
import { listData } from '../../data/dummyData'
const List = () => {
    const data=listData
    console.log(data.price);
    return (
        <div className='list'>
          
         {
          data?.map((el)=>{
            return <Card key={el.id} item={el}/>
          })
         }
        </div>
      )
}

export default List