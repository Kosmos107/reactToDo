const handlers ={
    DEFAULT:state=>{
        return state}
}

export const TodoReducer = (state,action)=>{
    const handler = handlers[action.type] || handlers.DEFAULT
    return handler(state,action)
}