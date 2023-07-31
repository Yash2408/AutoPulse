import React from 'react'
import './Header.css'
import logo from '../../images/logo.png'

const Header = () => {
    return (
        <div className="autopulse-header">
            <div className='artboard'>
                <img src={logo} />
                <div className='autopulse-tag'>
                    <p>Auto<strong>PULSE</strong></p>
                </div>
            </div>

        </div>

        // <div classNameName='autopulse-header'>
        //     Header
        // </div>
    )
}

export default Header
