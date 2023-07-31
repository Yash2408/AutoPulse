
import React from 'react';
import "./Home.css"
import { useNavigate } from 'react-router-dom';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import OutlinedInput from '@mui/material/OutlinedInput';
import logo from '../../images/logo.png'

export default function Login() {

    const navigate = useNavigate();

    const bg = {
        backgroundColor: 'grey',
    }

    return (
        <div className='home'>
            <Header />
            <div className="form">
                <div className='form-box'>
                    <hr className='hr-line' />
                    <div className='sign-in'>
                        <div className='sign-in-header'>
                            <p>Sign In</p>
                            <span>Sign in to access your account</span>
                        </div>
                        <div className='sign-in-input'>
                            <OutlinedInput className='input-user' placeholder="Username or Email or Mobile Number" />
                            <br /><br />
                            <OutlinedInput className='input-user' placeholder="Password" />
                            <p className='forgot-password'>Forgot Password?</p>
                        </div>
                        <button onClick={() => {
                            navigate('/dashboard')
                        }} className='sign-in-btn'><p>Sign in</p></button>
                    </div>
                    <div className='logo-text'>
                        <img src={logo} />
                        <p className='auto-pulse'>Auto<strong>PULSE</strong></p>
                        <p className='text'>Automated Policy Utilization and Lifecycle Services</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
