const { REGISTER_USER, GET_AUTH_USER, LOGOUT_USER, LOGIN_USER, ERRORS } = require("./actionTypes");

const initState={
   token:localStorage.getItem("token"), 
    user:null,
    isAuth:false
}

export const authReducer=(state=initState,action)=>{
    switch (action.type) {
        case LOGIN_USER:
        case REGISTER_USER:
        
     localStorage.setItem("token", action.payload.token);
       return{
        ...state,
        user:action.payload.user,
        isAuth:true,
        err:null
       }
       case GET_AUTH_USER:
        return{
            ...state,
            user:action.payload.user,
            isAuth:true
        }
    case LOGOUT_USER :
        localStorage.removeItem("token");
        return{
            ...state,
            isAuth:false,
            user:null
        }
        case ERRORS:{
            return{
                ...state,
                isAuth:false,
                user:null,
                err:action.payload
            }
        }
        default:
       return state
    }
}
