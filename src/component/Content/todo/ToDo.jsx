import React from "react"
import s from "./ToDo.module.scss"
import ToDoList from "./ToDoList"
const ToDo=(props)=>{
    console.log(props)
    let mapArr = props.tex.map((arr,num)=>{
        console.log(arr)              
        return(
            <ToDoList t={arr.text} key={num} />
        )
    })
        return(
        <>  
            <div  className={s.wrapperOrigin}>
              {mapArr}
            </div>
            <input onKeyDown={props.funcKey} onChange={props.funcNew} value={props.newText} className={s.textToDo} />
            <button  onClick={props.funcText} className={s.ToDoButtons} >
                add
            </button>
        </>
        )
    }

export default ToDo