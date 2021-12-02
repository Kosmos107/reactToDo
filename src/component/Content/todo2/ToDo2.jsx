import React,{} from "react"
import s from "./ToDo2.module.scss"

import { addNewList2 } from "../../../redux/actionCreate/actions"
import {useDispatch,useSelector} from "react-redux"



const ToDo2=()=>{
       
    const newFunction =(e)=>dispatch(addNewList2(e.target.value))
    const title = useSelector(state=>{
        console.log("state",state)
    })
   
    const dispatch = useDispatch()
        return(
        <>
            <div  className={s.wrapperOrigin} >
          
            </div>
            <div className={s.wrraperErr}><div className={s.w}>{}</div></div>
            <input  onClick={newFunction}  className={s.textToDo} />
        </>
        )
    }


  

export default ToDo2