import { combineReducers } from 'redux';
import { usersListReducer} from './reducers/userReducers.js';

const rootReducer = combineReducers({
    users:usersListReducer

});

export default rootReducer;