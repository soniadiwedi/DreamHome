
import Card from "../../components/card/Card";
import Filter from "../../components/filter/Filter";
import Map from "../../components/map/Map";
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
        {data?.map((el)=>{
          return <div key={el.id}>
            <Card item= {el}/>
          </div>
        })}
    </div>
   </div>
   <div className="mapContainer"><Map items={data}/></div>
  </div>
  )
}

export default ListPage;