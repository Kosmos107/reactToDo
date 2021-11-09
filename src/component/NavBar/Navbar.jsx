import s from "./Navbar.module.scss"
import Link from "./link/Link"
import React from "react"


class Navbar extends React.Component{
    constructor(props){
        super()
    }
    render(){
        let Links = massLink.map(mass=>(
            <Link 
            name={mass.name}
            link={mass.lis}
            key={mass.key}
            func={this.props.change}
            />
        ))
        return(
            <div className={s.wrraper}>
                <ul className={s.links }  >
                    {Links}
                </ul>
            </div>
           
        )
    }  
}
 export default Navbar
 const massLink = [{
    name:"ToDo",
    lis:"#",
    key:1
    },
    {name:"Work",
    lis:"##",
    key:2
    },
    {name:"Exit",
    lis:"###",
    key:3
    }]

   
    