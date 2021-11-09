import React from "react"
import s from "./Work.module.scss"

const Work=(props)=>{
    if(props.number===0 || props.number ===""){
        return(
            <div className={s.wrapperZ}>
                числа не существует
            </div>
        )
    }
    if(props.number>100){
        return(
            <div className={s.wrapperZ}>
                слишком много
            </div>
        )
    }
    if(props.number<10){
        return (
            <div className={s.wrapperNot}>
                это число не подходи {props.number}
            </div>
        )
    }
    return(
        <div className={s.wrapperYes}>
            это число подходи {props.number}
        </div>
    )
}

export default Work