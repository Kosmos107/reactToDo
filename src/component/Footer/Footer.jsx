import S from "./Footer.module.scss"
import Like from "./Like"
import store from "../../redux/store"
function Footer(props){
    return(
        <div className={S.wrapper}>
            <Like store={store}/>
        </div>
    )
}
export default Footer