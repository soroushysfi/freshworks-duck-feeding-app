
import DuckFeedingInfoActionTypes from './duck-feeding-info.types'

// action for updating redux state with the new array of data fetched
// from backend
export const updateDuckFeedingInfo = (items) => ({
    type: DuckFeedingInfoActionTypes.UPDATE_DUCK_FEEDING_INFO,
    
    payload: items
})
// action to update a boolean value existing in state
// to toggle a dom element

export const showSchedule = (showSchedule) => ({
    type: DuckFeedingInfoActionTypes.TOGGLE_SCHEDULE_INPUT,
    payload: showSchedule
    
})