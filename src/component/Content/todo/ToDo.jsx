import React from "react"
import s from "./ToDo.module.scss"
import ToDoList from "./ToDoList"
import { connect } from "react-redux"
import {addNewList,addError} from "../../../redux/actionCreate/actions"
const ToDo=(props)=>{
        const keyEnter = (e)=>{
            if(e.keyCode===13){
                e.preventDefault()
                props.addList(e)
                e.target.value=""
            }
        }
        const a = s.yesError
        const b = s.notError
        const err=(t)=>{
            if(t){return a }
            else{return b}
        }
        return(
        <>
            <div  className={s.wrapperOrigin}>
                {props.list.map((arr)=>{
                    return <ToDoList key={arr.data} state={arr} />
                })}
            </div>
            <div className={s.wrraperErr}><div className={err(props.error)}>{props.textError}</div></div>
            <input  onKeyDown={keyEnter}  className={s.textToDo} />
        </>
        )
    }


    const mapStateToProps = (state)=>{
        console.log("state>",state.toDo)

        return state.toDo
    }

    const mapDiscpathToProps=(disp)=>{
        return {
            addList:(e)=>{
                if(e.target.value.length>20){   
                    return disp(addError("слишком много символов"))
                }
                else if(e.target.value.trim()){
                    return disp(addNewList(e))
                }else {
                    return disp(addError("введите текст"))
                }
                
            }
        }
    }

export default connect(mapStateToProps,mapDiscpathToProps)(ToDo)