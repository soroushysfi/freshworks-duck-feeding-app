import React from 'react'


import './duck-feeding-info-box.styles.scss'
const DuckFeedingInfoBoxComponent = ({item}) => {
    const time = new Date(item.feedingTime)
    return (
        <div className='fetched-info-box' >
        <span>Duck Feeding Time:</span>
        <p>{time.getFullYear()}/{time.getMonth()}/{time.getDate()}</p>

        <span>Duck Count:</span>
        <p>{item.duckCount}</p>
        <span>Food Type:</span>
        <p>{item.foodType}</p>
    </div>
    )
}

export default DuckFeedingInfoBoxComponent
