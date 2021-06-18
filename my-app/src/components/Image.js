//Component to upload image 
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { getMenuImg,getMyTrucks } from "../actions/index";

const initImg = {
image: null
}

const Image = (props) => {
const [menuImg,setMenuimg] = useState(initImg);

const onChange = (e) => {

setMenuimg({image:e.target.files[0]})
}

const upload = (e) => {
    e.preventDefault();
const formData = new FormData();

formData.append(
   "imageFile",
    menuImg.image,
    menuImg.image.name
);

axiosWithAuth().post(`/trucks/menu/${props.menuid}/image/upload`,formData)
.then(res =>
    {console.log("")})
    .catch(err => {
        console.log(err.response)
    })

props.setHidden(true);

setTimeout(()=>{
    props.getMyTrucks();
},1000)
}

    return(
<form onSubmit = {upload}>
<label htmlFor="avatar">Select an image:</label>
<input type="file"
       id="avatar" name="image"
       accept="image/jpg, image/jpeg" onChange = {onChange}/><br/><br/>
       <button className = "btn btn-success">Upload</button>
</form>
    )
}



export default connect(null,{getMenuImg,getMyTrucks})(Image);