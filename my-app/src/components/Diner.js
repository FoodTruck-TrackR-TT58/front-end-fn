import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {getAllTrucks,getCurrentUser,addLocation,getRoleInfo} from "../actions"
import DinerDashboard from "./DinerDashboard";

const initLocation = {
    currentlocation: ''
}

const Diner = (props) => {
    const [hidden,setHidden] = useState(true)
    const [locat,setLocat] = useState(initLocation)

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
export default connect(mapStateToProps,{getAllTrucks,getCurrentUser,addLocation,getRoleInfo})( Diner);