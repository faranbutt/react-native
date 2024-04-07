import { auth } from "../firebase/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";


const attemptToLogin = async(email,password) => {
    try {
        const result = signInWithEmailAndPassword(auth,email,password)
        return result
    } catch (error) {
        console.log("Error while signing in")
        console.log(error.message)
    }
}


export {attemptToLogin};
