import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios';

import { updateDuckFeedingInfo } from './../../redux/duck-feeding-info/duck-feeding-info.actions'
import DuckFeedingInfoBoxComponent from './../../components/duck-feeding-info-box/duck-feeding-info-box.component'
import API_CRED from './../../config/api-config'

import './duck-feeding-info.styles.scss'
class DuckFeedingInfoComponent extends React.Component  {
    async getDuckFeedingInformation () {
        const result = await axios.get(`${API_CRED.address}?limit=10`)
        this.props.updateDuckFeedingInfo(result.data)
    }
    componentDidMount () {
        this.getDuckFeedingInformation()
    }
    render () {
        return (
        <div className='box-format'>
            {
                
                    (this.props.duckFeedingInfo.length) === 0 &&
                    <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                
            }
            {
             
                (this.props.duckFeedingInfo.length) > 0 &&
                this.props.duckFeedingInfo.map((item, i) => {
                    return (
                        <DuckFeedingInfoBoxComponent key={`duckFeedingInfo${i}`} item={item}/>
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
