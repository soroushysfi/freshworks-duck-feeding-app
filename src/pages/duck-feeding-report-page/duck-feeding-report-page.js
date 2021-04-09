import React from 'react'
import axios from 'axios';

import DuckFeedingInfoBoxComponent from '../../components/duck-feeding-info-box/duck-feeding-info-box.component'
import API_CRED from '../../config/api-config'

import './duck-feeding-report-page.styles.scss'
class DuckFeedingReportPage extends React.Component  {

    // calling backend api to fetch data on component load
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


export default DuckFeedingReportPage
