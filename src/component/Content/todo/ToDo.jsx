import React from "react"
import s from "./ToDo.module.scss"
import ToDoList from "./ToDoList"
class ToDo extends React.Component{


    render(){
        return(
    <>
    <div className={s.wrapperOrigin}>
        <ToDoList/>
    </div>
        <input className={s.textToDo} />
        <button className={s.ToDoButtons} >
            add
        </button>
    </>
        )}
}

export default ToDo