import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import authReducer from './authReducer';
import adminsReducer from './adminsReducer';

export default combineReducers({
    users: usersReducer,
    auth: authReducer,
    admins: adminsReducer
});

// The key in the key: object pair is used in the pages/ components to map out.
// It's used in mapStateToProps