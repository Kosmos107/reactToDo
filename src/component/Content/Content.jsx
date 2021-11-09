import React from "react"
import S from "./Content.module.scss"
import Work from "./work/Work"
import ToDo from "./todo/ToDo"

class Content extends React.Component {
    constructor(props){
        super()
        this.state = {number:25}
        this.hander = this.hander.bind(this)
        this.ShowNow = this.ShowNow.bind(this)
        this.load = this.load.bind(this)
    }
    hander(event){
        this.setState({number:event.target.value})
    }
    load (z){
        if(z){
            return(
                <div className={S.load}>
                </div>   
            )
        }
    }
    ShowNow(x){
        this.load(true)
        
        
        switch(x){
            case "Work":
                return(
                <div className={S.content}>
                    <Work number={this.state.number}/>
                     <input className={S.info} value={this.state.number} onChange={this.hander} />
                </div>
                )
             case "ToDo":
                return(
                <div className={S.content}>
                    <ToDo />
                </div>
                )
                default:
                return(
                <div className={S.content}>
                    
                </div>
                )
    }}
    
    render(){
        let Info = this.props.show
        return(<>
        {this.ShowNow(Info)}
        </>)    
    }
}


export default Content