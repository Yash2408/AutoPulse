import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="sb__footer section__padding">
                <div className="sb__footer-below">
                    <div className="sb__footer-copyright">
                        <p>
                            <strong className='st'>AutoPulse</strong> @ {new Date().getFullYear()}
                        </p>
                    </div>
                    <div className='sb__footer-below-links'>
                        <p>
                            Powered by <a href="https://www.arksoftai.com/" target='_blank'>ArkSoft AI</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
