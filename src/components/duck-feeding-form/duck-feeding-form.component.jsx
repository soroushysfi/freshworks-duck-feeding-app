// form for submitting duck feeding data
// this form uses custom inputs and redux state

import React from 'react'
import { connect } from 'react-redux'

import { showSchedule } from './../../redux/duck-feeding-info/duck-feeding-info.actions'

import DuckFeedingForm from './duck-feeding-form'

class DuckFeedingFormComponent extends React.Component {
  constructor (props) {
    super(props);
  }
  render () {
    return (  
      <DuckFeedingForm {...this.props}/>
    )
  }
}

// dispatching showSchedule action to toggle showSchedule in
// state
const mapDispatchToProps = dispatch => ({
  showScheduleToggle: (data) => dispatch(showSchedule(data))
})
// mapping state to the props of this component, showSchedule
const mapStateToProps = (state) => ({ 
  showSchedule: state.duckFeeding.showSchedule
});
export default connect(mapStateToProps, mapDispatchToProps)(DuckFeedingFormComponent)
