import s from "./Metro.module.scss"
import React from "react"
import Error from "../Error/Error"
import Goal from "../Error/Goal"
class Metro extends React.Component{
    constructor(props){
        super()
        this.state={x:0,y:0,hasE:false}
        this.cordinat = this.cordinat.bind(this)
        this.myRef= React.createRef()
        this.functRec =this.functRec.bind(this)
        
        
    }

    functRec(){
        if(this.myRef.current.value){console.log(this.myRef.current.value)}
        
        
    }
    cordinat(e){
        let x =e.clientX
        let y = e.clientY
         this.setState({x:x,y:y})
    }

    addErr=()=>{
        this.setState({hasE:true})
    }
    render(){
        let objXY= this.state
        const bel={
            b1:"#2271b3",
            b2:"#ddffff"
        }
     
    return(
        
        <div onMouseMove={this.cordinat} className={s.wrapper}>
            {/* это предохранитель */}
            <Error> 
                {(this.state.hasE)? <Goal/> : null}
                {this.props.ren(objXY,bel)}
                <input ref={this.myRef} onClick={this.functRec} className={s.blog}/>
                {/* вызвать предохранитель предохранитель */}
                <button style={{width:"45px",height:"30px"}} onClick={this.addErr} >
                    вызвать ошибку
                </button>
            </Error> 
        </div>   
    )
}}
export default Metro