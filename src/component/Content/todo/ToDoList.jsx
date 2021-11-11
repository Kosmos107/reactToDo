import React from "react"
import s from "./ToDo.module.scss"


function ToDoList(props){
    
    return(
        <label className={s.wrapper} >
            <input className={s.ListInput}  type="checkbox" />
            <p className={s.text}>
                {props.newInfo.text}
            </p>
            
        </label>
    )
}
export default ToDoList