import React from "react"
import S from "./Content.module.scss"
import Work from "./work/Work"
import ToDo from "./todo/ToDo"
import Metro from "./metro/Metro"
import {Routes,Route} from "react-router-dom"
import Thunk from "./thunk/Thunk"
import Todo2 from "./todo2/ToDo2"

//делаем редюсер

class Content extends React.Component {
    constructor(props){
        super()
        this.state = {number:25}
        this.hander = this.hander.bind(this)

    }

    
  
    hander(event){
        this.setState({number:event.target.value})
    }
  
    
    render(){
       const RenderProp= (data,bl)=>{
            if(data.x>1300){
                return (
                    <div style={{background:bl.b2}}>Привет))</div> 
                 )
            }
            return (
                <div style={{background:bl.b1}}>{data.x}&nbsp;набери 1300</div>
                   )
        }
        
        return(
        <>
            <div className={S.content}>
                <Routes>
                    <Route path="/ToDo" element={<ToDo />} />
                    <Route path="/Work" element={<Work/>} />
                    <Route path="/Thunk" element={<Thunk/>} />
                    <Route path="/ToDo2" element={<Todo2/>} />
                    <Route path="/Metro" element={
                        // рендер пропс
                    <Metro ren={RenderProp} />
                    } />
                </Routes>
            </div>
        </>

        )    
    }
}


export default Content