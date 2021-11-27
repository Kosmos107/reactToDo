import {
    pullServer,
    beggin_load,
    errData_load,
} from "../type"


const initState = {load:false,data:[],err:false}
export const ServerReducer =(state=initState,action)=>{
    switch(action.type){
        case pullServer:
            return {
                ...state,
                data:[...action.payload],
                load:action.load,
                err:action.err
            }
        case beggin_load:
            return{
                ...state,
                load:action.load,
                err:action.err
            }

        case errData_load:
            return{
                ...state,
                load:action.load,
                err:action.err
            }
    default: return state
        }
}