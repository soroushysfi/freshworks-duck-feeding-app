import React from 'react'
import { Link } from 'react-router-dom'


import './header.styles.scss'
const HeaderComponent = () => {
    return (
        <div className='link-div'>
        <Link className='top-link-style' to='/'><span className='link-text'>Form</span></Link>
        <Link className='top-link-style' to='/report'><span className='link-text'>Report (last 10 dates)</span></Link>
        </div>
    )
}

export default HeaderComponent
