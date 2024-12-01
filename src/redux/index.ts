/**
 * @author David Roman 
 * @file 
 * @desc 
 * @copyright David Roman
 */
import { combineReducers } from "redux";
import { MainState, MainReducer as Main } from "./slices/main";

export interface State {
  Main: MainState;
}

const rootReducer = combineReducers({
  Main,
});

export default rootReducer;
