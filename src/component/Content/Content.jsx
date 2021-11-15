import React from "react"
import S from "./Content.module.scss"
import Work from "./work/Work"
import ToDo from "./todo/ToDo"
import {Routes,Route} from "react-router-dom"


//делаем редюсер

class Content extends React.Component {
    constructor(props){
        super()
        this.state = {number:25,text:[],newText:""}
        this.hander = this.hander.bind(this)
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
    
    render(){
        return(
        <>
            <div className={S.content}>
                <Routes>
                    <Route path="/ToDo" element={<ToDo func={[this.addNewText,this.key]} info={[this.state.text,this.state.newText]}  />} />
                    <Route path="/Work" element={<Work/>} />
                </Routes>
            </div>
        </>

        )    
    }
}


export default Content