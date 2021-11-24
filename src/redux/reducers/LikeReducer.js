import { plus } from "../type"


const initState = {
    like:11
}
//редюсер c помощью switch case
export const likeReducer =(state=initState,action)=>{
    console.log("reducer",action)
    switch(action.type){
        case plus:
            return {
                ...state,
                like:state.like+1
            }
    default: return state
        }
}