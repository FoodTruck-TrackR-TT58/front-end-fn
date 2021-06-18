import React, { useEffect, useState } from 'react';
import {connect} from "react-redux";
import {getMyTrucks,getRoleInfo} from "../actions/index"
import NewTruck from './NewTruck';
import Truck from './Truck';


const Operator = (props) => {
const [hidden,setHidden ] = useState(true);

    useEffect(()=>{
        props.getMyTrucks()
        props.getRoleInfo()
    }, [])

    return(
        <div>
            <h4>My trucks</h4>
            <div>
                {
                    hidden ?(   <button onClick = {()=> setHidden(!hidden)} className="btn  btn-warning">Add Truck</button>):
                    (<>
                    <NewTruck val = "add" />
                    <button  onClick = {() => setHidden({...hidden,hidden1:!hidden.hidden1})} className = "btn btn-info">Cancel</button>
                    </>
                    )
                }
            </div>
            
        {props.isFetching ? <h3>Data is loading... Please wait.</h3> :
            <div  className="mytrucks">
                {props.mytrucks.map(truck => {
                        return(  <div key= {truck.truckid}>
                        <Truck  mytruck = {truck}/> 
                              
                        </div>)
                    })
                 } 
            </div>}
           
        </div>
    )
}

const mapStateToProps = state =>{
  
    return{
        mytrucks: state.mytrucks,
        error: state.error,
        isFetching: state.isFetching
    }
}

export default connect(mapStateToProps,{getMyTrucks,getRoleInfo})(Operator);