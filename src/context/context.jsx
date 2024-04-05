import { signInWithEmailAndPassword } from "firebase/auth";
import React, { createContext } from "react";
import { FIREBASE_AUTH } from "../../firebaseconfiguretion";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { setItemAsync,getItemAsync,deleteItemAsync, } from "expo-secure-store";




export const AuthContext = createContext()

export default function AuthProvider({children}){
    const auth =  FIREBASE_AUTH
    const[islog,setLog] = React.useState(false)
    const [checkusertype,setCheckusertype] = React.useState('')

    return(
        <AuthContext.Provider value={{
            islog,
            setLog,
            checkusertype,
            setCheckusertype,
            login: async (email,password) =>{
                try {
                    const response = await signInWithEmailAndPassword(auth,email,password)
                    console.log(response)
                    setLog(true)                    
                } catch (error) {
                    console.error(error)
                }
            } ,
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
