import { doc, collection, getDoc } from "firebase/firestore"
import { getUserUID } from "./session"
import { firestoreConfig, storageConfig } from "../firebase/firebaseConfig"
import { getStorage, ref, getDownloadURL } from "firebase/storage"
import { randomNameGenerator } from "../utils/help"

const attemptToFetchUserData = async () => {
    try {
        const uid = await getUserUID();
        const documentRef = doc(firestoreConfig,'users',uid)
        const userData = await getDoc(documentRef);
        return userData.data();

    } catch (error) {
        console.log("Error in Fetching User Data")
        console.log(error.message)
        
    }
}


const attempttoFetchProfilePicture = async() => {
    try {
        const uid = await getUserUID();
        console.log("UDDD",uid)
        const picName = randomNameGenerator();
        const pictureRefrence= ref(storageConfig,`${uid}/${picName}`)
        const url = await getDownloadURL(pictureRefrence);
        return url;

    } catch (error) {
        console.log("Error while downloading picture")
        console.log(error.message);
    }
}

export {attemptToFetchUserData, attempttoFetchProfilePicture};