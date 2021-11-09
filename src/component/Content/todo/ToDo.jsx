import React from "react"
import s from "./ToDo.module.scss"
import ToDoList from "./ToDoList"
class ToDo extends React.Component{


    render(){
        return(
    <>
        <ToDoList/>
        <input className={s.textTodo} />
    </>
        )}
}

export default ToDo