// switch case here is separate functions based on
// the types of actions triggered

import DuckFeedingInfoActionTypes from './duck-feeding-info.types'
const INITIAL_STATUS = {
    duckFeedingInfo: [],
    showSchedule: false
}

const DuckFeedingInfoReducer = (state = INITIAL_STATUS, action) => {
    switch (action.type) {
        case DuckFeedingInfoActionTypes.UPDATE_DUCK_FEEDING_INFO: 
            return {
                ...state,
                duckFeedingInfo: action.payload
            }    
        case DuckFeedingInfoActionTypes.TOGGLE_SCHEDULE_INPUT: 
            return {
                ...state,
                showSchedule: action.payload
            }          
        default:
            return state;
    }
}

export default DuckFeedingInfoReducer;