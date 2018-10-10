import {combineReducers} from 'redux'
import thunk from "redux-thunk"
import { firstReducer} from './firstReducer'

const rootReducer = combineReducers({
	firstReducer
});

export default rootReducer