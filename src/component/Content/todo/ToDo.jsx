import React from "react"
import s from "./ToDo.module.scss"
import ToDoList from "./ToDoList"
const ToDo=(props)=>{
    let[text,newText]= props.info 
    let [addNewText,key]=props.func
        return(
        <>
            <div className={s.wrapperOrigin}>
                {text.map((arr,num)=>{
                console.log(arr,num)
                return <ToDoList newInfo={arr} key={num} />
                })}
            </div>
            <input onKeyDown={key} onChange={addNewText} value={newText} className={s.textToDo} />
        </>
        )
    }

export default ToDo