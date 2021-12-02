import { combineReducers } from "redux";
import { likeReducer } from "./reducers/LikeReducer";
import {ToDoReducer} from "./reducers/ToDoReducer"
import {ServerReducer} from "./reducers/ServerReducer"
import { ToDo2Reducer } from "./reducers/ToDo2Reducer";
export const rootReducer = combineReducers({
    likes:likeReducer,
    toDo:ToDoReducer,
    toDo2:ToDo2Reducer,
    server:ServerReducer,
})