import React from 'react'
import logo from '../assets/images/logo.svg'
import './styles/Footer.css'

const Footer = () => {
    return (
        <footer className='footer'>

            <div className='logos-footer'>
                <div className='logo-footer'>
                    <img src={logo} alt="" />
                </div>
                <div className='social-media'>
                    <i className='bx bxl-instagram'></i>
                    <i class='bx bxl-pinterest-alt'></i>
                    <i class='bx bxl-youtube'></i>
                </div>
            </div>

        </footer>
    )
}

export default Footer