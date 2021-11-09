import s from "./Link.module.scss"
const Link=(props)=>{
    return(
        <li className={s.wrapper}>
            <a href={props.lis} className={s.link} onClick={props.func} >
           {props.name} 
            </a>
        </li>
    )
}
export default Link