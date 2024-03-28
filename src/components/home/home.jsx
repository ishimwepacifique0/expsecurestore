import { deleteItemAsync, getItemAsync } from 'expo-secure-store'
import React, { useContext } from 'react'
import { View,Text,Button } from 'react-native'
import AuthProvider, { AuthContext } from '../../context/context';


function Home() {
    getItemAsync('userToken')
    .then((data)=>{
        console.log(data)
    }).catch((err)=>{
        console.log(err)
    });

    const {setLog,log} = useContext(AuthContext) 
    const Logout =  async () => {
        setLog(false)
        console.log(log)
        await deleteItemAsync('userToken')
        await deleteItemAsync('email')
    }

    return (
        <View>
            <Text>Home</Text>
            <Button title='Log out'  onPress={()=>{Logout()}} />
        </View>
    )
}

export default Home
