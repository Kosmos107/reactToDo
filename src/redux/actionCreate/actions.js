import { plus,
    addNewMess,
    addNewError,
    pullServer,
    beggin_load,
    errData_load,
} from "../type";

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

export function addNewList(val){
        return{
            type:addNewMess,
            payload:{newMess:val}
        }
    
}
//thunk

export function begginLoad(){
    return{
        type:beggin_load,
        load:true,
        err:false
    }
}
export function resultData(data){
    return{
        type:pullServer,
        payload:data,
        load:false,
        err:false
    }
}
export function errData(err){
    return{
        type:errData_load,
        err:true,
        load:false,
    }
}