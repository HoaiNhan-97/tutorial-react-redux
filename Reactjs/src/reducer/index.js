import { combineReducers } from "redux";
import todoAppReducer from "./todoapp.reducer";
import hobbyReducer from "./hobby.reducer";
const rootReducer =  combineReducers({
 hobby:hobbyReducer,
 todoApp: todoAppReducer
})
export default rootReducer;