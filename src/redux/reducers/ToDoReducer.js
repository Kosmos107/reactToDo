import {addNewMess,addNewError} from "../type"

const initState={
    list:[{mess:"24",data:new Date().toLocaleDateString()}],
    error:false,
    textError:"eee",
}


export const ToDoReducer=(state=initState,action)=>{
    console.log("ToDoReducer",state)
    switch(action.type){
        case addNewMess:
            return{
                ...state,
                list:[...state.list,{mess:action.payload.newMess,data:new Date().toLocaleDateString()}],
                error:false
            }
        case addNewError:{
            return{
                ...state,error:true,textError:action.err
            }
        }
        default:return state
    }
}