import React, { useState } from "react";
import { connect } from "react-redux";
import Menu from "./Menu"
import {addRating,getAllTrucks} from "../actions/index";

const initRate = {
    "rating":""
}

const DinerDashboard = (props) => {
    const{mytruck} = props;
    const[rate,setRating] = useState(initRate);

    const submit = (e) => {
      props.addRating(rate, mytruck.truckid) 
      setTimeout(()=>{
        props.getAllTrucks();
      },2000)
     
    }



    return(
        <div  className = "card truck">
            <div className = "card-body">
            <img src= {mytruck.imageoftruck} alt = "foodtruck" className="rounded"/>
            <p>Cuisine: {mytruck.cuisinetype}</p>
            <p>Departure time: {mytruck.departuretime}</p>
            <p>Location: {mytruck.location}</p>
            <p>Rating : {mytruck.customerratingavg}</p>
            
            <div>
            <h3>Menu</h3>
            
            {
                mytruck.menus.map(menu => {
                    return (<Menu key = {menu.menuid} menu = {menu}/>)
                })
            }

            </div>

           <h4>Rate</h4>
          
           <span className={(rate.rating>=1 && rate.rating <=5 )? "fa fa-star checked":"fa fa-star"} onClick={() => setRating({rating:"1"})}></span>
           <span className={(rate.rating>=2 && rate.rating <=5 )? "fa fa-star checked":"fa fa-star"} onClick={() => setRating({rating:2})}></span>
           <span className={(rate.rating>=3 && rate.rating <=5 )? "fa fa-star checked":"fa fa-star"} onClick={() => setRating({rating:3})}></span>
           <span className={(rate.rating>=4 && rate.rating <=5 )? "fa fa-star checked":"fa fa-star"} onClick={() => setRating({rating:4})}></span>
           <span className={(rate.rating>=5 && rate.rating <=5 )? "fa fa-star checked":"fa fa-star"} onClick={() => setRating({rating:5})}></span>
           <br/>
           <button className = "btn btn-warning" onClick = {submit}>Submit rate</button>

         </div>  
        </div>
    )
}
export default connect(null,{addRating,getAllTrucks})(DinerDashboard);