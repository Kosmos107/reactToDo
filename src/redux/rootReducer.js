import { combineReducers } from "redux";
import { likeReducer } from "./reducers/LikeReducer";
import {ToDoReducer} from "./reducers/ToDoReducer"
import {ServerReducer} from "./reducers/ServerReducer"
export const rootReducer = combineReducers({
    likes:likeReducer,
    toDo:ToDoReducer,
    server:ServerReducer,
})