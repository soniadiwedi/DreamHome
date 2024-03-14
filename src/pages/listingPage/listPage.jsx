
import Card from "../../components/card/Card";
import Filter from "../../components/filter/Filter";
import { listData } from "../../data/dummyData";
import "./list.scss"


function ListPage() {
  const data = listData;
console.log("data",data);
  return (
  <div className="listPage">
   <div className="listContainer">
    <div className="wrapper">
        <Filter/>
        {data.map((el)=>{
          return <div key={el.id}>

            <Card el= {el}/>
          </div>
        })}
    </div>
   </div>
   <div className="mapContainer">map</div>
  </div>
  )
}

export default ListPage;