import {API_START,
    API_FAIL,
    API_SUCCESS,
    GET_ALL_TRUCKS,
    GET_MY_TRUCKS,
    // GET_CURRENT_TRUCK,
     GET_MENU_IMG,
      GET_CURRENT_USER,
    GET_ROLE, LOGOUT} from "../actions";

const initialState = {
 trucks: [],
 mytrucks: [],
 isFetching: false,
 error: '',
 menuimg:null,
//  currenttruck: {},
 currentuser: {},
 role:""
}

export const reducer = (state = initialState,action) => {
    switch (action.type) {
        case API_START:
            return{
                ...state,
                isFetching: true
            }
        case API_SUCCESS:
            return {
                ...state,
                isFetching:false
            }
        case API_FAIL:
            return{
                ...state,
                isFetching:false,
                error: action.payload
            }
        case GET_ALL_TRUCKS:
            return{
                ...state,
                isFetching: false,
                trucks:action.payload
            }
        case GET_MY_TRUCKS:
            return{
                ...state,
                isFetching: false,
                mytrucks: action.payload
            }
        // case GET_CURRENT_TRUCK:
        //     return{
        //      ...state,
        //      isFetching: false,
        //      currenttruck: action.payload
        //     //  currenttruck: state.mytrucks.filter(truck => {
        //     //      return truck.truckid === action.payload
        //     //  })[0]
        //     }

        case GET_MENU_IMG:
            return{
                ...state,
                isFetching:false,
                menuimg: action.payload
            }
        case GET_CURRENT_USER:
            return{
                ...state,
                isFetching: false,
                currentuser: action.payload
            }
        case GET_ROLE:
            return{
                ...state,
                isFetching: false,
                role: action.payload
            }
        case LOGOUT:
            return{
                ...state,
                isFetching: false,
                role: ""
            }

        default:
            return state;
    }
}