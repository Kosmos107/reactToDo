import React,{useContext, useState,useReducer} from "react"

const AlertContext = React.createContext()


export const useAlert = ()=>{
    return useContext(AlertContext)
}




export const AlertProvider = ({children})=>{


    const [alert,setAlert]= useState(true)

    const cheking =()=>{
      setAlert((prev)=>{
        console.log("cheking",prev)
         return !prev
      })
    }
    


    return(
        <AlertContext.Provider value={{
            hidden:alert,
            cheking
        }}>
                {children}
        </AlertContext.Provider>
    )
    }


