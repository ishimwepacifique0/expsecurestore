import { deleteItemAsync, getItemAsync } from 'expo-secure-store'
import React, { useContext } from 'react'
import { View, Text, Button,Image } from 'react-native'
import AuthProvider, { AuthContext } from '../../context/context';
import { Card } from '@rneui/themed';


function UserHome() {
    getItemAsync('userToken')
        .then((data) => {
            console.log(data)
        }).catch((err) => {
            console.log(err)
        });

    const { setLog, log } = useContext(AuthContext)
    const Logout = async () => {
        setLog(false)
        console.log(log)
        await deleteItemAsync('userToken')
        await deleteItemAsync('email')
    }

    return (
        <View style={{backgroundColor:'white'}}>
            <Text>Home user</Text>
            <Button title='Log out' onPress={() => { Logout() }} />
            <View style={{ width: '40%', backgroundColor: 'white', elevation: 10, borderRadius: 10 }}>
            <Card.Title>CARD WITH DIVIDER</Card.Title>
            <Card.Divider />
            <View style={{ position: "relative", alignItems: "center" }}>
                <Image
                    style={{ width: "100%", height: 100 }}
                    resizeMode="contain"
                    source={{ uri: "https://avatars0.githubusercontent.com/u/32242596?s=460&u=1ea285743fc4b083f95d6ee0be2e7bb8dcfc676e&v=4" }}
                />
                <Text >Pranshu Chittora</Text>
            </View>
        </View>
        </View>
    )
}

export default UserHome
