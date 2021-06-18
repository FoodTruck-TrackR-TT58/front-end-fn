
import React, {  useState } from 'react';
import { connect } from 'react-redux';
import {addMenu,getMyTrucks} from "../actions/index";


const initMenu = {
itemname : "",
itemdescription: "",
itemprice:"",
}

const NewMenu = (props) => {
const [menuItem,setMenuItem] = useState(initMenu);

const onChange = (e) => {
    
  
    setMenuItem({...menuItem,[e.target.name]:e.target.value})
    
}

const addMenu = (e) => {
  e.preventDefault();
props.addMenu(menuItem,props.truckid);

setTimeout(()=>{
  props.getMyTrucks();
},1000)

}


return(
  <div >
    <form onSubmit = {addMenu} className="card-body">
      <div className = "form-group">
         <label>
              Dish Name <br/>
            <input 
            type = "text"
            name = "itemname"
            value = {menuItem.itemname}
            onChange = {onChange}
            />
            </label>
<br/>
            <label>
              Dish description<br/>
            <input 
            type = "text"
            name = "itemdescription"
            value = {menuItem.itemdescription}
            onChange = {onChange}
            />
            </label>
<br/>
            <label>
             Price<br/>
            <input 
            type = "number"
            name = "itemprice"
            value = {menuItem.itemprice}
            onChange = {onChange}
            />
            </label>
<br/>

  </div>
    <button className = "btn btn-success">Submit menu</button>

    </form>
    
    </div>
)
}



export default connect(null,{addMenu,getMyTrucks})(NewMenu);