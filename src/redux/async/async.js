import axios from "axios"
import {begginLoad,resultData,errData} from "../actionCreate/actions"



export const pullAllDataServer=()=>{

    return dispatch=>{
        dispatch(begginLoad())

        axios
        .get("https://jsonplaceholder.typicode.com/comments?postId=3")
        .then(res=>{
           
            setTimeout(()=>{
            dispatch(resultData(res.data))
            },15000)
           
        })
        .catch(err=>{
            dispatch(errData(err.message))
        })


    }
}