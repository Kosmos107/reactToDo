import {createStore} from "redux"
import { rootReducer } from "./rootReducer"
//состаяние



//хранилище
const store = createStore(rootReducer)

export default store