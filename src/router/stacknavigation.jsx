import { createStackNavigator } from '@react-navigation/stack';
import Home from '../components/home/home';
import LoginForm from '../components/authentication/login/login';
import RegisterForm from '../components/authentication/register/register';
import { AuthContext } from '../context/context';
import { useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getItemAsync } from 'expo-secure-store';
import UserHome from '../components/home/user';




const Stack = createStackNavigator();



export default function MyStack() {
    const { islog, checkusertype } = useContext(AuthContext)
    const [checkToken, setCheckToken] = useState(false)
    useEffect(() => {
        const getTokenfromStorage = async () => {
            try {
                // const token = await AsyncStorage.getItem("userToken")
                const token = await getItemAsync('userToken')
                if (token != null) {
                    setCheckToken(true)
                } else {
                    setCheckToken(false)
                }
            } catch (err) {
                console.log(err)
            }
        }
        getTokenfromStorage()
    }, [])
    return (
        <Stack.Navigator >
            {islog ? (
                <>
                    {checkusertype == "customer" ? (
                        <Stack.Screen name="usersdashboard" component={UserHome} />

                    ) : null}

                    {checkusertype == "admin" ? (
                        <Stack.Screen name="admindashboard" component={Home} />

                    ) : null}

                </>
            ) : (<>
                <Stack.Screen name="login" component={LoginForm} />
                <Stack.Screen name="register" component={RegisterForm} />
            </>)}



        </Stack.Navigator>
    );
}