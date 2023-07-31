import {
    signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./firebase"


const FirebaseAuthService = {
    loginService: (email, password, navigate) => {
        console.log("onpress");
        console.log(email, password);
        try {
            return async function (dispatch) {
                console.log("working");
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

                        else
                            alert("Incorrect email or password, Please enter password carefully");
                    });
            };
        } catch (error) {
            console.log(error);
        }
    }
};

export default FirebaseAuthService;
