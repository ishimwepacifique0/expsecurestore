import { signInWithEmailAndPassword } from "firebase/auth";
import React, { createContext } from "react";
import { FIREBASE_AUTH } from "../../firebaseconfiguretion";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { setItemAsync,getItemAsync,deleteItemAsync, } from "expo-secure-store";




export const AuthContext = createContext()

export default function AuthProvider({children}){
    const auth =  FIREBASE_AUTH
    const[islog,setLog] = React.useState(false)

    return(
        <AuthContext.Provider value={{
            islog,
            setLog,
            login: async (email,password) => {
                try {
                    const response = await signInWithEmailAndPassword(auth, email, password)
                    console.log(response.user.stsTokenManager.accessToken)
                    setLog(true)
                    try{
                        // await AsyncStorage.setItem("userToken",JSON.stringify(response.user.stsTokenManager.accessToken))
                        await setItemAsync('userToken',JSON.stringify(response.user.stsTokenManager.accessToken))
                        await setItemAsync('email',JSON.stringify(email))

                    }catch(ruth){
                        console.log(ruth)
                    }
                } catch (error) {
                    setLog(false)
                    console.log(error)
                }
            },
            logout: async () => {
                setLog(false)
                await deleteItemAsync('userToken')
                await deleteItemAsync('email')
            }

        }}>
            {children}
        </AuthContext.Provider>
    )
}
