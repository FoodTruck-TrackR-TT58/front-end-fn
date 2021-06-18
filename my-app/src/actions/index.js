import {axiosWithAuth} from '../utils/axiosWithAuth';
export const API_START = "API_START";
export const API_SUCCESS ="API_SUCCESS";
export const API_FAIL = "API_FAIL";
export const GET_ALL_TRUCKS = "GET_ALL_TRUCKS";
export const GET_MY_TRUCKS = "GET_MY_TRUCKS";
export const GET_CURRENT_TRUCK = "GET_CURRENT_TRUCK";
export const GET_MENU_IMG = "GET_MENU_IMG";
export const GET_CURRENT_USER = "GET_CURRENT_USER";
export const GET_ROLE = "GET_ROLE";
export const  LOGOUT = "LOGOUT";

export const addTruck = (truck) => dispatch => {
dispatch({type: API_START})
axiosWithAuth().post("/trucks/truck",truck)
.then((res) => {

    dispatch({type: API_SUCCESS})
})
.catch(err => {
    dispatch({type: API_FAIL,payload:err.response})
})
}

// post menu
export const addMenu = (menu,truckid) => dispatch => {
 dispatch({type: API_START})

axiosWithAuth()
.post(`/trucks/${truckid}/menu`,menu)
.then(res => {
    // console.log(res)
    dispatch({type: API_SUCCESS})
})
.catch(err => {
    // console.log(err);
    dispatch({type: API_FAIL,payload:err.response})
})
}

//diner gets self
export const getDinerSelf = () => dispatch => {
    axiosWithAuth()
    .get("/diners/self")
    .then(res => {
        console.log(res.data)
        //  dispatch({type: API_SUCCESS})
    })
    .catch(err => {
        console.log(err.response)
        dispatch({type: API_FAIL,payload:err.response})
    })

}


//diner adds his location
export const addLocation = (locat,dinerid) => dispatch => {
    axiosWithAuth()
    .patch(`/diners/update/diner/${dinerid}`,locat)
    .then(res => {
         dispatch({type: API_SUCCESS})
    })
    .catch(err => {
        console.log(err.response)
        dispatch({type: API_FAIL,payload:err.response})
    })
}

//diner adds rating
export const addRating = (rating,truckid) => dispatch => {

  axiosWithAuth().post(`/diners/${truckid}/rating`,rating)  
  .then(res => {
    dispatch({type: API_SUCCESS})
  })
  .catch(err => {
    dispatch({type: API_FAIL,payload:err.response})
  })
}

export const getAllTrucks = () => dispatch => {
    dispatch({type: API_START})
    axiosWithAuth()
    .get("/trucks/trucks")
    .then(res => {
        // console.log(res)
        dispatch({type:GET_ALL_TRUCKS,payload:res.data})
    })
    .catch(err => {
        dispatch({type: API_START,payload:err.response})
    })
}

//operator gets his trucks
export const getMyTrucks = () => dispatch => {
    dispatch({type: API_START})
    axiosWithAuth()
    .get("/trucks/mytrucks")
    .then(res => {
        // console.log(res)
        dispatch({type:GET_MY_TRUCKS,payload:res.data})
    })
    .catch(err => {
        dispatch({type: API_START,payload:err.response})
    })
}

export const getMenuImg = (menuid) => dispatch => {
    dispatch({type: API_START})
    axiosWithAuth()
    .get(`/image/${menuid}`)
    .then(res => {
        dispatch({type: GET_MENU_IMG,payload: res.data})
    })
    .catch(err => {
        dispatch({type: API_FAIL,payload: err.response})
    })
}

//gets truck by id
// export const getCurrentTruck = (id) => dispatch => {
//     dispatch({type: API_START})  
//     axiosWithAuth()
//     .get(`/trucks/truck/${id}`) 
//     .then(res=> {
//         console.log(res.data)
//         dispatch({type: GET_CURRENT_TRUCK,payload: res.data})
//     })
//     .catch(err => {
//         console.log(err.response)
//         dispatch({type: API_FAIL,payload: err.response})
//     })
    
// }

//operator deletes menu
export const deleteMenu = (menuid) => dispatch => {
    dispatch({type: API_START})
    axiosWithAuth()
    .delete(`/trucks/menu/${menuid}`)
    .then(res => {
        // dispatch({type: API_SUCCESS})
        console.log(res)
    })
    .catch(err => {
        // console.log(err.response)
        dispatch({type: API_FAIL,payload:err.response})
    })

}

//operator updates truck
export const updateTruck =(truckid,data) =>(dispatch)=>{
    dispatch({type: API_START})
    axiosWithAuth()
    .patch(`/trucks/truck/${truckid}`,data)
    .then(res => {
        dispatch({type: API_SUCCESS})
    })
    .catch(err => {
        dispatch({type: API_FAIL,payload:err.response})
    })
}



export const getCurrentUser  = () => dispatch => {
    dispatch({type: API_START})
    axiosWithAuth()
    .get("/getuserinfo")
    .then(res =>{
        dispatch({type:GET_CURRENT_USER,payload:res.data})
    }) 
    .catch(err => {
        dispatch({type: API_FAIL,payload:err.response})
    })
}

export const getRoleInfo = () => dispatch => {
    dispatch({type:API_START})
    axiosWithAuth()
    .get("/getroleinfo")
    .then(res => {
        dispatch({type:GET_ROLE,payload:res.data})
    })
    .catch(err => {
        dispatch({type: API_FAIL,payload:err.response})
    })
}

export const logout = () => dispatch => {
    axiosWithAuth()
    .get("/logout")
    .then(res => {
        // dispatch({type: API_SUCCESS ="API_SUCCESS" }); 
        dispatch({type:LOGOUT})
    })
    .catch(err => {
        
        dispatch({type: API_FAIL,payload:err.response})
    })
}