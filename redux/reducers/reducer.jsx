import { combineReducers } from 'redux';

import filtersReducer from '../slices/Userslice';
import Levelslice from '../slices/Userslice';

const rootReducer = combineReducers({
    User: Userslice.reducer,
    Level: Levelslice.reducer,
});

export default rootReducer;