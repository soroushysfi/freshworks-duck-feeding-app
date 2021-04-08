import {combineReducers} from 'redux';

import DuckFeedingInfoReducer from './duck-feeding-info/duck-feeding-info.reducer'
const rootReducer  = combineReducers({
    duckFeeding: DuckFeedingInfoReducer
})

export default rootReducer;