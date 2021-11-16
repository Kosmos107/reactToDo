
import react from "react"
import React from "react"
import s from "./Work.module.scss"
import {WorkContext} from "./workContext"

// сравнение пропсов и контекста
console.log(WorkContext)
class Work extends react.Component {
    constructor(props){
        super()
        this.change=this.change.bind(this)
        this.state ={val:""}
    }
        change(e){
            this.setState((v,p)=>{
               return {val:e.target.value}
            })
        }
    render(){
        
        return(
            <WorkContext.Provider value={this.state.val} >
                <input value={this.state.val} onChange={this.change}/>
                <div className={s.wrapperYes}>
                    <WorkOne num="25"/>
                    {/* ладно,пойдет {props.number} */}
                </div>
            </WorkContext.Provider>
        )
    }
    
}

const WorkOne =(props)=>{
    
    return(
        <div>
            элемент 1&nbsp;
            {`${props.num} num`}
       <Worktwo num1={props.num} />
       </div>
    )
}

const Worktwo =(props)=>{
    return(
        <div>
        элемент 2&nbsp;
        {`${props.num1} num1`}
        <WorkContext.Consumer>
        {t1=>
            <WorkThree num2={props.num1} num3={t1}/>
        }
        </WorkContext.Consumer>
        </div>
    )
}
const WorkThree=(props)=>{
    console.log(props)
    return(
        <div>
        элемент 3&nbsp;
        {`${props.num2} num2`}
        &nbsp;
        {`${props.num3} num3`}
        </div>
    )
}

export default Work