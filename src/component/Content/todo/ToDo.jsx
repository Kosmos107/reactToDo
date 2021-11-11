import React from "react"
import s from "./ToDo.module.scss"
import ToDoList from "./ToDoList"
const ToDo=(props)=>{
    console.log(props.info)
    let[text,newText]= props.info 
    let [addText,addNewText,key]=props.func
    
    console.log(props.func)
        return(
        <>
            <div className={s.wrapperOrigin}>
                {text.map((arr,num)=>{
                console.log(arr,num)
                return <ToDoList newInfo={arr} key={num} />
                })}
            </div>
            <input onKeyDown={key} onChange={addNewText} value={newText} className={s.textToDo} />
            <button onClick={addText} className={s.ToDoButtons} >
                add
            </button>
        </>
        )
    }

export default ToDo