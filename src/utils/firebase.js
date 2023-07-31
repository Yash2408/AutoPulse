// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAS0uNHoiA1oI1xjGW2tMZI-Hu2wL4AUC0",
    authDomain: "licdataapp.firebaseapp.com",
    projectId: "licdataapp",
    storageBucket: "licdataapp.appspot.com",
    messagingSenderId: "94908361949",
    appId: "1:94908361949:web:3f3fd82bad071564c3bf34",
    measurementId: "G-35ZC3432XD"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// export const db = getFirestore(app);

// export const userCollectionRef = collection(db, "users");
export default app;
export const auth = getAuth(app)