import s from "./Error.module.scss"
import React from "react"
class Error extends React.Component{
    constructor(props){
        super()
        this.state = {hasE:false,e:null,eI:null}
          
    }
   
    componentDidCatch(e,eI){
        this.setState({
            hasE:true,
            e,
            eI
        })
        
    }
   

    render(){
        
        if(this.state.hasE){
           return <div className={s.wrapperError}>тут ошибка</div>
        }
        return this.props.children
}}
export default Error