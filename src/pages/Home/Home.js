// import React, { useState } from 'react';

// function PercentageFields() {
//     const initialFields = [
//         { id: 1, name: 'First Premium', percentage: 50, editedPercentage: 50, isEditing: false },
//         { id: 2, name: 'Second Premium', percentage: 60, editedPercentage: 60, isEditing: false },
//         { id: 3, name: 'Term Rate', percentage: 70, editedPercentage: 70, isEditing: false },
//         { id: 4, name: 'First Premium Edit', percentage: 80, editedPercentage: 80, isEditing: false },
//         { id: 5, name: 'Second Premium Edit', percentage: 90, editedPercentage: 90, isEditing: false },
//         { id: 6, name: 'Term Rate Edit', percentage: 100, editedPercentage: 100, isEditing: false },
//     ];

//     const [fields, setFields] = useState(initialFields);

//     const handleEditClick = (id) => {
//         setFields((prevFields) =>
//             prevFields.map((field) =>
//                 field.id === id ? { ...field, isEditing: true } : field
//             )
//         );
//     };

//     const handleDialogClose = (id) => {
//         setFields((prevFields) =>
//             prevFields.map((field) =>
//                 field.id === id ? { ...field, isEditing: false } : field
//             )
//         );
//     };

//     const handleInputChange = (event, id) => {
//         const { value } = event.target;
//         setFields((prevFields) =>
//             prevFields.map((field) =>
//                 field.id === id ? { ...field, editedPercentage: value } : field
//             )
//         );
//     };

//     const handleSubmit = (event, id) => {
//         event.preventDefault();
//         setFields((prevFields) =>
//             prevFields.map((field) =>
//                 field.id === id
//                     ? { ...field, percentage: field.editedPercentage, isEditing: false }
//                     : field
//             )
//         );
//     };

//     return (
//         <div>
//             <h3>Percentage Fields</h3>
//             {fields.map((field) => (
//                 <div key={field.id}>
//                     {field.isEditing ? (
//                         <form onSubmit={(event) => handleSubmit(event, field.id)}>
//                             <div>
//                                 <label>Original Percentage ({field.name}):</label>
//                                 <input
//                                     type="number"
//                                     min="0"
//                                     max="100"
//                                     value={field.percentage}
//                                     disabled
//                                 />
//                             </div>
//                             <div>
//                                 <label>Edited Percentage ({field.name}):</label>
//                                 <input
//                                     type="number"
//                                     min="0"
//                                     max="100"
//                                     value={field.editedPercentage}
//                                     onChange={(event) => handleInputChange(event, field.id)}
//                                 />
//                             </div>
//                             <div>
//                                 <button type="submit">Save</button>
//                                 <button type="button" onClick={() => handleDialogClose(field.id)}>Cancel</button>
//                             </div>
//                         </form>
//                     ) : (
//                         <div>
//                             <input
//                                 type="number"
//                                 min="0"
//                                 max="100"
//                                 value={field.percentage}
//                                 disabled
//                             />
//                             <button type="button" onClick={() => handleEditClick(field.id)}>Edit</button>
//                         </div>
//                     )}
//                 </div>
//             ))}
//         </div>
//     );
// }
// export default PercentageFields;

import React,{useState} from 'react';
import "./Home.css"
import { useNavigate } from 'react-router-dom';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import OutlinedInput from '@mui/material/OutlinedInput';
import logo from '../../images/logo.png'
import FirebaseAuthService from '../../utils/FirebaseAuthService'

export default function Home() {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    return (
        <div className='home'>
            <Header/>
            <div className="form">
                <div className='form-box'>
                    <hr className='hr-line'/>
                    <div className='sign-in'>
                        <div className='sign-in-header'>
                            <p>Sign In</p>
                            <span>Sign in to access your account</span>
                        </div>
                        <div className='sign-in-input'>
                            <OutlinedInput
                                className='input-user'
                                placeholder="Username or Email or Mobile Number"
                                value={email}
                                onChange={handleEmailChange}
                            />
                            <br/><br/>
                            <OutlinedInput
                                className='input-user'
                                placeholder="Password"
                                type="password"
                                value={password}
                                onChange={handlePasswordChange}
                            />
                            <p className='forgot-password'>Forgot Password?</p>
                        </div>
                        <button onClick={FirebaseAuthService.loginService(email, password, navigate)} className='sign-in-btn'>
                            <p>Sign in</p>
                        </button>
                    </div>
                    <div className='logo-text'>
                        <img src={logo} />
                        <p className='auto-pulse'>Auto<strong>PULSE</strong></p>
                        <p className='text'>Automated Policy Utilization and Lifecycle Services</p>
                    </div>
                </div>
            </div>     
            <Footer/>
        </div>
    );
}
