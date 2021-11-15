import React from "react";
import { TodoContext } from "./todoContext";

export const TodoState = ({children})=>{
    return(
        <TodoContext.Provider>
            {children}
        </TodoContext.Provider>
    )
}