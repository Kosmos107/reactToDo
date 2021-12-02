import {addNewList2} from "../type"
const initState={
   hell:1
}


export const ToDo2Reducer=(state=initState,action)=>{
    console.log("ToDoReducer",state)
    switch(action.type){
        case addNewList2:
            return{
               ...state,
               hell:2
            }
        default: return state
    }
}