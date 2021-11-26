import React from "react"
import s from "./ToDo.module.scss"


function ToDoList(props){
    debugger
    return(
        <label className={s.wrapper} >
            <input className={s.ListInput}  type="checkbox" />
            <div className={s.text}>
                <span className={s.basic}>{props.state.mess}</span>
                <small>{props.state.data}</small>
            </div>
            
        </label>
    )
}
export default ToDoList