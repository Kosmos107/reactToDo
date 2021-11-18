import s from "./Metro.module.scss"
import React from "react"
class Metro extends React.Component{
    constructor(props){
        super()
        this.state={x:0,y:0}
        this.cordinat = this.cordinat.bind(this)
        
    }
    cordinat(e){
        let x =e.clientX
        let y = e.clientY
         this.setState({x:x,y:y})
    }
    render(){
        let objXY= this.state
        const bel={
            b1:"#2271b3",
            b2:"#ddffff"
        }
      
    return(
        <div onMouseMove={this.cordinat} className={s.wrapper}>
        {this.props.ren(objXY,bel)}
        <input className={s.blog}/>
        </div>
    )
}}
export default Metro