import * as SecureStore from 'expo-secure-store';

const setUserUID = async(uid) => {
    try {
        const result =await SecureStore.setItemAsync('userUID',uid)
        return result
    } catch (error) {
        console.log("Error in setting UID")
        console.log(error.message)   
    }
}


const getUserUID = async() => {
    try {
        const result = await SecureStore.getItemAsync('userUID')
        return result
    } catch (error) {
        console.log("Error in retreiveing in UID")
        console.log(error.message)
    }
}


const removeUserUID = async() => {
    try {
        const result = await SecureStore.setItemAsync('userUID','')
        return result
    } catch (error) {
        console.log("Error in removing UID")
        console.log(error.message);        
    }
}


export {getUserUID,setUserUID,removeUserUID};