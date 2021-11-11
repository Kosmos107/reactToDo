import React from "react"
import s from "./ToDo.module.scss"


function ToDoList(props){
    console.log(props)
    console.log(props.t)
    return(
        <label className={s.wrapper} >
            <input className={s.ListInput}  type="checkbox" />
            <div className={s.text}>
                {props.t}
            </div>
            
        </label>
    )
}
//разабраться в этом пиздеце
//исправить проблему с пустым массивом

export default ToDoList