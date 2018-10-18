import { combineReducers } from 'redux';

import posts from './postReducer';
import customers from './customerReducer';
import orders from './orderReducer';

export default combineReducers({
    posts,
    // customers,
    // orders
});

