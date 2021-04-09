//main duck feeding report page

import React from 'react'
import { connect } from 'react-redux'

import { updateDuckFeedingInfo } from '../../redux/duck-feeding-info/duck-feeding-info.actions'

import DuckFeedingReportPage from './duck-feeding-report-page'
class DuckFeedingReportPageComponent extends React.Component  {

    render () {
        return (
            <DuckFeedingReportPage {...this.props} />
    )
    }
}

// dispatching actions to manipulate state
const mapDispatchToProps = dispatch => ({
    updateDuckFeedingInfo: (data) => dispatch(updateDuckFeedingInfo(data))
})
// mapping existing state properties to props
// of this component
const mapStateToProps = (state) => ({ 
    duckFeedingInfo: state.duckFeeding.duckFeedingInfo
});

// using connect to create a higher order component to use 
// with Redux
export default connect(mapStateToProps, mapDispatchToProps)(DuckFeedingReportPageComponent)
