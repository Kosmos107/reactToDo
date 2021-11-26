import { combineReducers } from "redux";
import { likeReducer } from "./reducers/LikeReducer";
import {ToDoReducer} from "./reducers/ToDoReducer"
export const rootReducer = combineReducers({
    likes:likeReducer,
    toDo:ToDoReducer
})