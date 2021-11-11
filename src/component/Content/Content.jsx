import React from "react"
import S from "./Content.module.scss"
import Work from "./work/Work"
import ToDo from "./todo/ToDo"

class Content extends React.Component {
    constructor(props){
        super()
        this.state = {number:25,text:[{text:67}],newText:"150"}
        this.hander = this.hander.bind(this)
        this.ShowNow = this.ShowNow.bind(this)
        this.addTextToDo=this.addTextToDo.bind(this)
        this.addNewText=this.addNewText.bind(this)
    }

    key=(e)=>{
        console.log(e)
        if(e.keyCode===13){
            this.addTextToDo()
        }
    }
    addTextToDo(){
            console.log(this.state)
            let newtext = this.state.newText
            let arr =this.state.text
            let newArr= [...arr]
            if(newtext){
            newArr.push({text:newtext})
            this.setState((state)=>{
                return(
                    state.text=newArr,
                    state.newText="" 
                )
            })
            }else(console.log("напиши текст"))
    }
    addNewText(e){
        this.setState({newText:e.target.value})
        
    }
    hander(event){
        this.setState({number:event.target.value})
    }

    ShowNow(x){
        
        switch(x){
            case "Work":
                return(
                <div className={S.content}>
                    <Work number={this.state.number}/>
                     <input className={S.info} value={this.state.number}  onChange={this.hander} />
                </div>
                )
             case "ToDo":
                return(
                <div  className={S.content}>
                    <ToDo 
                    funcNew={this.addNewText}
                    funcText={this.addTextToDo}
                    newText={this.state.newText}
                    tex={this.state.text}
                    funcKey={this.key}
                    
                    />
                    
                    
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