import React from "react"
import s from "./Footer.module.scss"
import {connect} from "react-redux"
import {plusLike} from "../../redux/actionCreate/actions"

class Like extends React.Component{
    constructor(props){
       
        super()
        
    }
   
    render(){

        console.log("render",this.props)
        
        return(
            <>
            <h1 className={s.head}>
                {this.props.like}

            </h1>
            <button className={s.btn} onClick={this.props.plus}/>
            </>
        )
    }
}

function mapStateToProps(state){
    console.log("mapstateToProps>",state)
    return{
        like:state.likes.like
    }
}
function mapDispathcToProps(disp){
    return{
        plus:()=>{
            return disp(plusLike())
        }
    }
}

export default connect(mapStateToProps,mapDispathcToProps)(Like)
