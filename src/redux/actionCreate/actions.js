import { plus,addNewMess,addNewError } from "../type";

export function plusLike (){
    return{
        type:plus
    }
}

export function addError(text){
    return{
        type:addNewError,
        err:text
    }
}

export function addNewList(e){
        return{
            type:addNewMess,
            payload:{newMess:e.target.value}
        }
    
}