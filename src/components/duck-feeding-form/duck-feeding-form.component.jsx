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
const mapDispatchToProps = dispatch => ({
  showScheduleToggle: (data) => dispatch(showSchedule(data))
})
const mapStateToProps = (state) => ({ 
  showSchedule: state.duckFeeding.showSchedule
});
export default connect(mapStateToProps, mapDispatchToProps)(DuckFeedingFormComponent)
