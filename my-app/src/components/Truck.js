import React, { useState } from "react"
import Menu from "./Menu";
import NewMenu from "./NewMenu";
import NewTruck from "./NewTruck";


const initialHidden = {
    hidden1: true,
    hidden2: true,
    }

const Truck = (props) => {
 const {mytruck } = props;
 const [hidden,setHidden] = useState(initialHidden);


    return(
        <div  className = "card truck">
            <div className = "card-body">
            <p>Cuisine: {mytruck.cuisinetype}</p>
            <p>Departure time: {mytruck.departuretime}</p>
            <p>Location: {mytruck.location}</p>
            <img src= {mytruck.imageoftruck} alt = "foodtruck" className="rounded"/>
            </div>
            <div className = "card-body">
            {
                                hidden.hidden1?(<button onClick = {()=> setHidden({...hidden,hidden1:!hidden.hidden1})} className = "btn  btn-warning" >Update Truck</button>):
                                (
                                <>
                                <NewTruck val = "update" truckid = {mytruck.truckid}/>
                                <button  onClick = {() => setHidden({...hidden,hidden1:!hidden.hidden1})} className = "btn btn-info">Cancel</button>
                                    </>
                                )
                            }
            </div>
            <div  className = "card-body">
            {
                                hidden.hidden2?  (<button onClick = {() => setHidden({...hidden,hidden2:!hidden.hidden2})} className = "btn  btn-warning">Add Menu</button>):
                                (
                                    <>
                                    <NewMenu hide = {setHidden} truckid = {mytruck.truckid} />
                                    <button  onClick = {() => setHidden({...hidden,hidden2:!hidden.hidden2})} className = "btn btn-info">Cancel</button>
                                    </>
                                )
                            }   
            </div>
            <div className = "card-body">
            <h3>Menu</h3>
            
            {
                mytruck.menus.map(menu => {
                    return (<Menu key = {menu.menuid} menu = {menu}/>)
                })
            }

            </div>
            
        </div>
    )
}
export default Truck;