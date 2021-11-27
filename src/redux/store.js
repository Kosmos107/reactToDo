import {createStore,applyMiddleware} from "redux"
import { rootReducer } from "./rootReducer"
import thunk from "redux-thunk"


//состаяние



//хранилище
const store = createStore(rootReducer,applyMiddleware(thunk))

export default store