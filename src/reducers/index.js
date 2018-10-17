import { combineReducers } from 'redux';

import customers from './customerReducer';
import orders from './orderReducer';

export default combineReducers({
    customers,
    orders
});

