import { Image, Text, View } from "react-native";
import { attemptToFetchUserData, attempttoFetchProfilePicture } from "../../services/profile-services";
import { useEffect, useState } from "react";
export default function ProfileScreen(){
   const [ userData, setUserData ] = useState(null);
   const [profilePicture,setProfilePicture] = useState(null);
   const fetchUserData = async () => {
    const data = await attemptToFetchUserData();
    setUserData(data);
   } 
   const fetchUserProfilePicture = async() => {
    const picData = await attempttoFetchProfilePicture();
    setProfilePicture(picData);
   }
   useEffect(()=>{
    fetchUserData();
    fetchUserProfilePicture();
   },[])

   console.log('pAPA',userData);
   console.log("PICC",profilePicture);
    return (
        <View>
            <Text>Profile Screen</Text>
            {profilePicture && <Image source={{uri:`${profilePicture}`}} className='w-30 h-30' /> }
        </View>
    );
}