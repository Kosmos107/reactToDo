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
    if(props.number<30){
        return (
            <div className={s.wrapperNot}>
                слишком мало {props.number}
            </div>
        )
    }
    return(
        <div className={s.wrapperYes}>
            ладно,пойдет {props.number}
        </div>
    )
}

export default Work