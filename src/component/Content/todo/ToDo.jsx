import React from "react"
import s from "./ToDo.module.scss"
import ToDoList from "./ToDoList"
import { connect } from "react-redux"
import {newWrite,addNewList} from "../../../redux/actionCreate/actions"
const ToDo=(props)=>{

        const keyEnter = (e)=>{
            if(e.keyCode===13){
                props.addList()
            }
        }
        return(
        <>
            <div  className={s.wrapperOrigin}>
                {props.list.map((arr)=>{
                    debugger
                    return <ToDoList state={arr} />
                })}
            </div>
            <input value={props.newList.mess} onKeyDown={keyEnter} onChange={props.writeMess} className={s.textToDo} />
        </>
        )
    }


    const mapStateToProps = (state)=>{
        console.log("state>",state.toDo)

        return state.toDo
    }

    const mapDiscpathToProps=(disp)=>{
        return {
            writeMess:(e)=>{
                return disp(newWrite(e))
            },
            addList:()=>{
                return disp(addNewList())
            }
        }
    }

export default connect(mapStateToProps,mapDiscpathToProps)(ToDo)