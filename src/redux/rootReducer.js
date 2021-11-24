import { combineReducers } from "redux";
import { likeReducer } from "./reducers/LikeReducer";
export const rootReducer = combineReducers({
    likes:likeReducer
})