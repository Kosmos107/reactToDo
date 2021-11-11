import React from "react"
import S from "./Content.module.scss"
import Work from "./work/Work"
import ToDo from "./todo/ToDo"

class Content extends React.Component {
    constructor(props){
        super()
        this.state = {number:25,text:[],newText:"150"}
        this.hander = this.hander.bind(this)
        this.ShowNow = this.ShowNow.bind(this)
        this.load = this.load.bind(this)
        this.addTextToDo=this.addTextToDo.bind(this)
        this.addNewText=this.addNewText.bind(this)
    }

    key = (e)=>{
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
            console.log(this.state)
            this.setState((state)=>{
                console.log("newtext",newtext)
                return(
                    state.text=newArr,
                    state.newText="" 
                )
            })
        }else(console.log("напиши текст"))
       
    }
    addNewText(e){
        this.setState({newText:e.target.value})
        console.log(this.state)
        console.log(this.state.text)
        
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
                    <ToDo 
                    info={[this.state.text,this.state.newText]}
                    func={[this.addTextToDo,this.addNewText,this.key]}
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