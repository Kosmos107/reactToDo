import { plus,newMess,addNewMess  } from "../type";

export function plusLike (){
    return{
        type:plus
    }
}

export function newWrite(e){
    return{
        type:newMess,
        payload:e.target.value
    }
}

export function addNewList(){
    return{
        type:addNewMess 
    }
}