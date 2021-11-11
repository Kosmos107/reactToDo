import React from "react"
import s from "./ToDo.module.scss"
import ToDoList from "./ToDoList"
const ToDo=(props)=>{
    console.log(props.info)
    console.log(props.info)
        return(
        <>
            <div className={s.wrapperOrigin}>
                {props.info.map((arr,num)=>{
                console.log(arr,num)
                debugger
                return <ToDoList text={arr} key={num} />
                })}
            </div>
            <input onChange={props.funcNew} value={props.newText} className={s.textToDo} />
            <button onClick={props.funcText} className={s.ToDoButtons} >
                add
            </button>
        </>
        )
    }

export default ToDo