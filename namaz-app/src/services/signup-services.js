
import { auth, firestoreConfig, storageConfig } from "../firebase/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc,setDoc,getDoc,collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes } from 'firebase/storage'
import { imgtoBlob,randomNameGenerator } from "../utils/help";

async function attemptToSignup(email,password){ 
    try {
        console.log(email,password)
        const response = await createUserWithEmailAndPassword(auth,email,password)
        return response
    } catch (error) {
        let message = ''
        if(error.message.includes("email-already-in-use")){
            message = "Email is already in use"
        }
        alert(message);
        console.log(error)   
    }

}

async function attemptToSendUsersData(uid,firstname,lastname,email,dob,gender){
    try {
        const data = {
            firstName: firstname,
            lastName: lastname,
            email:email,
            dob:dob,
            gender:gender
        }
        const collectionRef = collection(firestoreConfig,'users')
        const documentRef = doc(collectionRef,uid)
        const response = await setDoc(documentRef,data)
        return response
    } catch (error) {
        alert(error.message)
        console.log(error)
    }
}

async function attempttoUploadImage(uid,profileImage){
    try {
        const imageRandomName = randomNameGenerator();
        const storageRef = ref(storageConfig, `${uid}/${imageRandomName}`);
        const blob = await imgtoBlob(profileImage);
        const  response = uploadBytes(storageRef,blob);
        console.log("Uploaded Image",response);

    } catch (error) {
        console.log("IMage not uploaded",error);
    }
}

export {attemptToSignup,attemptToSendUsersData, attempttoUploadImage};