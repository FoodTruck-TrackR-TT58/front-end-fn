
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import {deleteMenu,getMyTrucks} from "../actions"

import Image from "./Image";

const Menu = (props) => {
    const [menuImg,setImg] = useState("");
    const {menu} = props;
    const [hidden, setHidden] = useState(true);

    useEffect(() => {
    axiosWithAuth()
    .get(`/image/${menu.menuid}`)
    .then(res => 
        {
            setImg(`data:image/jpg;base64,${res.data.picByte}`)
        })
    },[])

    const deleteM = (e) => {
      e.preventDefault();
     props.deleteMenu(menu.menuid);

     setTimeout(()=>{
      props.getMyTrucks()
     },1000)
    }
    // console.log(menu)
    return(
        <div className = "card-body">
            <h5>{menu.itemname}</h5>
            <p>Description: {menu.itemdescription}</p>
            <p>Price: {menu.itemprice}$</p>
            {menuImg !== ""?(<img  src = {menuImg} alt = "menuImg" width = "200px" className = "rounded-circle"/>):<></> }
           
            {props.role === "operator" ? <div>{menuImg === "" ? <Image menuid = {menu.menuid} setHidden = {setHidden}/>: <></>} 
            <br/><br/> 
            <button onClick = {deleteM} className = "btn btn-danger">Delete menu</button></div> : <></>}
        </div>
    )
}

const mapStatetoProps = (state) => {
    // console.log(state)
    return {
     role: state.role
    }
}
export default connect(mapStatetoProps,{deleteMenu,getMyTrucks})(Menu);