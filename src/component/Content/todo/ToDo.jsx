import React from "react"
import s from "./ToDo.module.scss"
import ToDoList from "./ToDoList"
import { connect } from "react-redux"
import {addNewList,addError} from "../../../redux/actionCreate/actions"

const ToDo=(props)=>{
        const keyEnter = (e)=>{
            if(e.keyCode===13){
                e.preventDefault()
                let val = e.target.value
                props.addList(val)
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
            addList:(val)=>{
                if(val.length>20){   
                    return disp(addError("слишком много символов"))
                }
                else if(val.trim()){
                    return disp(addNewList(val))
                }else {
                    return disp(addError("введите текст"))
                }
                
            }
        }
    }
const eli =22
export default connect(mapStateToProps,mapDiscpathToProps)(ToDo)