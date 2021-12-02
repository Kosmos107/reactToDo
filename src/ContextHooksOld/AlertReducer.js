import React,{useContext,useReducer} from "react"

const AlertContext = React.createContext()


export const useAlert = ()=>{
    return useContext(AlertContext)
}
const reducer = (state,action)=>{
    switch(action.type){
        case "show":
            return{
                ...state,
                hidden:true
            }
        case "hidden":
            return{
                ...state,
                hidden:false
            }

        default: return state
    }

}

export const AlertProvider = ({children})=>{



    const [state,dispatch]=useReducer(reducer,{
        hidden:false
    })

    const on =()=>{
        dispatch({type:"show"})
    }
    const off=()=>{
        dispatch({type:"hidden"})
    }
    


    return(
        <AlertContext.Provider value={{hid:state.hidden,on,off}}>
                {children}
        </AlertContext.Provider>
    )
    }


