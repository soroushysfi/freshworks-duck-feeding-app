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

const mapDispatchToProps = dispatch => ({
    updateDuckFeedingInfo: (data) => dispatch(updateDuckFeedingInfo(data))
})
const mapStateToProps = (state) => ({ 
    duckFeedingInfo: state.duckFeeding.duckFeedingInfo
});
export default connect(mapStateToProps, mapDispatchToProps)(DuckFeedingReportPageComponent)
