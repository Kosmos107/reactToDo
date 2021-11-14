import s from "./Link.module.scss"
import {Link} from "react-router-dom"
const Linked=(props)=>{
    return(
        <li className={s.wrapper}>
            <Link to={props.name} className={s.link}  >
           {props.name} 
            </Link>
        </li>
    )
}
export default Linked