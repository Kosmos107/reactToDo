import react from "react"
import s from "./Wrapper.module.scss"

//компонент высшего порядка HOC



// const WForBlock = ({children ,to})=>{
//     return(
//             <div style={{marginBottom:to}}>{children}</div>
//     )
// }
// const WForBlock = (props)=>{
//     return(
//             <Block {...props} />
//     )
// }

// const Block = ({to,children})=>{
//     debugger
//     return(
//         <h1 style={{marginBottom:to}}>{children}</h1>
//     )
// }

//компонент высшего порядка
const LoadBlock = (loading)=>(Block)=>{
    return class WForBlock extends react.Component{
        render(){
             
        return (this.props.load) ? <Block {...this.props} />:<div className={s.load}>load</div>

        }
    }
}
//компонент для обработки
const Block = ({to,children})=>{
    debugger
    return(
        <h1 style={{marginBottom:to}}>{children}</h1>
    )
}

//реализация компонента высшего порядка
const WrapBlock = LoadBlock("load")(Block)



//добавления компонента
class Wrapper extends react.Component{
    constructor(props){
        super()
        this.state={load:true}
        this.loading=this.loading.bind(this)
    }

    loading(){
        
        
        this.setState((state)=>{
            debugger
            return{load:(!state.load)}})
        console.log(this.state.load)
    }
    render(){
       
        return(
            <>
            <WrapBlock load={this.state.load} to={"10px"}>1,2,3</WrapBlock>
            <WrapBlock load={this.state.load} to={"25px"}>4,5,6</WrapBlock>
            
            <button className={s.btn} onClick={this.loading}>load</button>
            </>
        )
    }
}

export default Wrapper
//добавить анимацию загрузки