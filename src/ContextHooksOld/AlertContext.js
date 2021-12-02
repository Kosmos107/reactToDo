import React,{useContext, useState} from "react"

const AlertContext = React.createContext()
const AlertContextFunction = React.createContext()

export const useAlert = ()=>{
    return useContext(AlertContext)
}
export const useAlertFunct = ()=>{
    return useContext(AlertContextFunction)
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
        <AlertContext.Provider value={alert}>
            <AlertContextFunction.Provider value={cheking}>
                {children}
            </AlertContextFunction.Provider>
        </AlertContext.Provider>
    )
    }


