import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {getAllTrucks,getCurrentUser,addLocation,getRoleInfo,findTruckByLocation} from "../actions"
import DinerDashboard from "./DinerDashboard";

const initLocation = {
    // currentlocation: ''
}

const Diner = (props) => {
    const [hidden,setHidden] = useState(true)
    const [locat,setLocat] = useState(initLocation)
    // const [search,setSearch] = useState("")
    
    useEffect(() => {
        props.getAllTrucks()
        props.getCurrentUser()
        props.getRoleInfo()
    },[])

    const change = (e) => {
        setLocat({[e.target.name]:e.target.value})
    }

    const submitLocat = (e) => {
        e.preventDefault();
        if(hidden){
            setHidden(!hidden)
        }
        else{
        props.addLocation(locat,props.dinerid)
        setTimeout(()=>{
            props.getCurrentUser()
        },1500)
        
        setHidden(!hidden)
        }
        
        setLocat("")
    }

    const findByLocation = (e) => {
    e.preventDefault();
    props.findTruckByLocation(locat.search)
    setLocat(initLocation);
    }

    return(
        <div>
    {props.dinlocat !== ""?
            <>
            <p> <b>My Location: </b> {props.dinlocat}</p>
            {hidden?<button onClick = {() => setHidden(!hidden)} className = "btn btn-info">Update location</button>:<></> } 
            </>: <></> }
    {hidden? 
            (<></>) :
            (<>
                <br/><br/>
                <input type = "text" name = "currentlocation" value = {locat.currentlocation} onChange = {change} placeholder = "Enter your location"/>
                <br/><br/>
                <button onClick = {submitLocat} className = "btn btn-success"> Add your location</button><br/><br/>

            </>)}
           
            <div>
            <br/>
            <h6>Find truck by location: </h6>
            <form>
            <input  type = "text" name = "search" value = {locat.search} onChange = {change} placeholder = "Enter desired location"/>
            <input type = "submit" value = "Search" onClick = {findByLocation} style = {{background:"#5bc0de", color:"white"}}/>
            </form>
            </div>
            <br/>
            <h3>Trucks Available</h3>

            {props.isFetching ? <h3>Data is loading... Please wait</h3> :
            <div>
                {props.trucks.map(truck => {
                    return <DinerDashboard key = {truck.truckid} mytruck = {truck}/>
                })}
            </div>}
        </div>
 
    )
}
const mapStateToProps = (state) => {
return {
    trucks: state.trucks,
    isFetching: state.isFetching,
    dinerid: state.currentuser.dinerid,
    dinlocat: state.currentuser.currentlocation
}
}
export default connect(mapStateToProps,{getAllTrucks,getCurrentUser,addLocation,getRoleInfo,findTruckByLocation})( Diner);