import React, { useState } from 'react';
import { connect } from 'react-redux';
import {addTruck,updateTruck,getMyTrucks,} from "../actions/index";

const initialValues = {
    cuisinetype:null,
    departuretime: null,
    location:null,
    imageoftruck: null,
}

const NewTruck = (props) => {

    const [formValues,setFormValues] = useState(initialValues);
   
    const change = (e) =>{
    setFormValues({...formValues,[e.target.name]:e.target.value})
    }

    const submit = (e) => {
     e.preventDefault();

     props.addTruck(formValues)

     setTimeout(()=>{
        props.getMyTrucks();
      },1000)
   setFormValues(initialValues)
    }

    const update = (e) => {
    e.preventDefault();
    props.updateTruck(props.truckid,formValues);

    setTimeout(()=>{
    props.getMyTrucks();
     },1000)
    }


    return(
        <form onSubmit={props.val === "add" ? submit : update} className = "form-group">
            <label>
                Cuisine Type:&nbsp;
                <input 
                type = "text"
                name = "cuisinetype"
                value = {formValues.cuisinetype}
                onChange = {change}
                />
            </label>
            <br/>

            <label>
                Departure time:&nbsp;
                <input 
                type = "date"
                name = "departuretime"
                value = {formValues.departuretime}
                onChange = {change}
                />
            </label>
            <br/>

            <label>
               Location:&nbsp;
                <input 
                type = "text"
                name = "location"
                value = {formValues.location}
                onChange = {change}
                />
            </label>
            <br/>

           <label>
               Image url:&nbsp; 
                <input 
                type = "text"
                name = "imageoftruck"
                value = {formValues.imageoftruck}
                onChange = {change}
                />
            </label>
            <br/>

            <button className="btn btn-success"> {props.val === "add" ? "Add" :"Update"} truck</button>
    
        </form>
    )

}

export default connect(null,{addTruck,updateTruck,getMyTrucks})(NewTruck);