import React, { useState } from 'react';
// import FirebaseAuthService from '../../utils/FirebaseAuthService';
import {
    // createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    // signOut,
} from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { auth } from "../../utils/firebase"
const LoginForm = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((credentials) => {
                // Storing user details on redux state
                // dispatch({
                //   type: ActionTypes.SET_UID,
                //   payload: credentials.user,
                // });
                alert("Login Success");
                console.log(credentials);

                navigate("/dashboard");
            })
            .catch((err) => {
                console.log(err);
                if (err.message.toString().includes("user-not-found"))
                    alert(
                        "Incorrect email, if you are a new user please create account first"
                    );

                if (err.message.toString().includes("wrong-password"))
                    alert("Incorrect password, Please enter password carefully");
            });

    };

    return (
        <div>
            <h2>Authentication</h2>
            <div>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div>
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div>
                <button onClick={handleSignIn}>Sign In</button>
            </div>
        </div>
    );
};

export default LoginForm;

// import React, { useState } from 'react';
// import { signIn } from '../utils/auth';

// const LoginForm = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSignIn = async () => {
//     try {
//       await signIn(email, password);
//       const token = await getToken(); // Get the user token
//       console.log('User token:', token);
//       // Redirect or perform additional actions after successful login
//     } catch (error) {
//       console.error('Sign in error:', error);
//       // Handle login errors
//     }
//   };

//   return (
//     <div className="form">
//             <form >
//                 <h3>Sign In</h3>
//                 <div className="input-container">
//                     <label><strong>Username or Email or Mobile Number</strong></label>
//                     <input type="text" id="uname" required />
//                 </div>
//                 <div className="input-container">
//                     <label><strong>Password</strong></label>
//                     <input type="password" id="pass" required />
//                 </div>
//                 <a href='#'><span><strong>Forgot Password?</strong></span></a>
//                 <div className="button-container">
//                     <input type="submit" value="Login" onClick={
//                         () => {
//                             navigate("/dashboard")
//                         }
//                     } />
//                 </div>
//             </form>
//         </div>

//   );
// };

// export default LoginForm;
