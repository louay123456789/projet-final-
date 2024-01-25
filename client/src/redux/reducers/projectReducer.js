import { GET_Post, } from "../actionTypes";

const initState={
    projects:[]
}


export const projectReducer=(state=initState,action)=>{
switch (action.type) {
    case GET_Post:
        
        return {...state,
        projects:action.payload}

    default:
        return state
}

}
