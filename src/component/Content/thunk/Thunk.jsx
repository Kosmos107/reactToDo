import s from "./Thunk.module.scss"
import React from "react"
import { connect } from "react-redux"
import {pullAllDataServer} from "../../../redux/async/async"


const Thunk =(props)=>{
    return(
        <div className={s.wrapper}>
            <button onClick={props.pullServer} className={s.btn}/>
            <div className={s.wrapRes}>
                {props.err? <div>упс... что-то пошло не так</div>:null}
                {
                props.load?<div className={s.load}></div>
                :props.data.map((arr)=><div style={{border:"1px solid red"}} key={arr.key}>{arr.name}</div>)
                }
            </div>
            
        </div>   
    )
    }

const mapStateToProps= state=>{
    
    return state.server
    
}
const mapDispatchToProps = dispatch =>{
    return{
        pullServer:()=>{
            return dispatch(pullAllDataServer())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Thunk)