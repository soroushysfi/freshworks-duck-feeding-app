import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios';

import { updateDuckFeedingInfo } from './../../redux/duck-feeding-info/duck-feeding-info.actions'

import './duck-feeding-info.styles.scss'
class DuckFeedingInfoComponent extends React.Component  {
    constructor (props) {
        super(props);
    }
    async getDuckFeedingInformation () {
        const result = await axios.get(`https://freshworks-duck-feeding-api.herokuapp.com/api/duck-feeding?limit=10`)
        this.props.updateDuckFeedingInfo(result.data)
    }
    componentDidMount () {
        this.getDuckFeedingInformation()
    }
    render () {
        return (
        <div className='box-format'>
            {
                (this.props.duckFeedingInfo.length) > 0 &&
                this.props.duckFeedingInfo.map((item, i) => {
                    return (
                        <div className='fetched-info-box' key={`duckFeedingInfo${i}`} >
                            <span>Duck Feeding Time:</span>
                            <p>{Date(item.feedingTime)}</p>
                            <span>Duck Count:</span>
                            <p>{item.duckCount}</p>
                            <span>Food Type:</span>
                            <p>{item.foodType}</p>
                        </div>
                    )
                })
            }
        </div>
    )
    }
}

const mapDispatchToProps = dispatch => ({
    updateDuckFeedingInfo: (data) => dispatch(updateDuckFeedingInfo(data))
})
const mapStateToProps = (state) => ({ 
    duckFeedingInfo: state.duckFeeding.duckFeedingInfo
});
export default connect(mapStateToProps, mapDispatchToProps)(DuckFeedingInfoComponent)
