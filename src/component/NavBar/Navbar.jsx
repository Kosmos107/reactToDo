import s from "./Navbar.module.scss"
import Linked from "./link/Link"
import React from "react"



class Navbar extends React.Component{
    constructor(props){
        super()
    }
    render(){
        return(
            <div className={s.wrraper}>
                <ul className={s.links }  >
                    {massLinks.map(mass=>{
                        return(
                            <Linked name={mass.name} key={mass.id} />
                            )
                        }
                    )}
                </ul>
            </div>
           
        )
    }  
}
 export default Navbar
 
 let massLinks=[
     {
         id:1,
         name:"ToDo",

     },
     {
         id:2,
         name:"Work"
     },
     {
        id:3,
        name:"Metro"
    },
    {
        id:4,
        name:"Thunk"
    },
    {
        id:5,
        name:"ToDo2"
    }
 ]