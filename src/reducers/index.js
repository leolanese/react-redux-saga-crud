import { combineReducers } from 'redux';
import UsersReducer from './users';

// barrel technique to combine reducers (nice when scaling up)
export default combineReducers({
	users: UsersReducer
});