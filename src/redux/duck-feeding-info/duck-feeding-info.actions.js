
import DuckFeedingInfoActionTypes from './duck-feeding-info.types'

export const updateDuckFeedingInfo = (items) => ({
    type: DuckFeedingInfoActionTypes.UPDATE_DUCK_FEEDING_INFO,
    
    payload: items
})

export const showSchedule = (showSchedule) => ({
    type: DuckFeedingInfoActionTypes.TOGGLE_SCHEDULE_INPUT,
    payload: showSchedule
    
})