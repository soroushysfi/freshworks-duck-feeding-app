import DuckFeedingInfoActionTypes from './duck-feeding-info.types'
const INITIAL_STATUS = {
    duckFeedingInfo: []
}

const DuckFeedingInfoReducer = (state = INITIAL_STATUS, action) => {
    switch (action.type) {
        case DuckFeedingInfoActionTypes.UPDATE_DUCK_FEEDING_INFO: 
            return {
                ...state,
                duckFeedingInfo: action.payload
            }            
        default:
            return state;
    }
}

export default DuckFeedingInfoReducer;