import {newMess,addNewMess} from "../type"

const initState={
    list:[{mess:"24",data:new Date().toLocaleDateString()}],
    newList:{mess:"",data:new Date().toLocaleDateString()}
}


export const ToDoReducer=(state=initState,action)=>{
    console.log("ToDoReducer",state)
    switch(action.type){
        case newMess:
            return{
                ...state,
                newList:{...state.newList,mess:action.payload}
            }
        case addNewMess:
            debugger
            return{
                ...state,list:[...state.list,state.newList],newList:{...state.newList,mess:""}
            }
        default:return state
    }
}