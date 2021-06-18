import React from 'react';
import {Link}  from 'react-router-dom';
const Home = (props) => {

    return(
        <header>
            <h1>Welcome to Foodtrucks!</h1>
            <div>
        <Link to="/Login"><button className = "btn btn-primary" >Login</button></Link>

        <Link to="/Register"><button className= "btn btn-primary" >Register</button></Link>
        </div>
        </header>
    )
}

export default Home;