import { createStackNavigator } from '@react-navigation/stack';
import Home from '../components/home/home';
import LoginForm from '../components/authentication/login/login';
import RegisterForm from '../components/authentication/register/register';
import { AuthContext } from '../context/context';
import { useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getItemAsync } from 'expo-secure-store';




const Stack = createStackNavigator();



export default function MyStack() {
    const { islog } = useContext(AuthContext)
    const [checkToken,setCheckToken] = useState(false)
    useEffect(()=>{
        const getTokenfromStorage = async ()=>{
            try{
                // const token = await AsyncStorage.getItem("userToken")
                const token = await getItemAsync('userToken')
                if(token != null){
                      setCheckToken(true)  
                }else{
                    setCheckToken(false)
                }
            }catch(err){
                console.log(err)
            }
        }
        getTokenfromStorage()
    },[])
    return (
        <Stack.Navigator >
            {islog ? (
                <>
                    <Stack.Screen name="Home" component={Home} />

                </>
            ) : (<>
                <Stack.Screen name="login" component={LoginForm} />
                <Stack.Screen name="register" component={RegisterForm} />
            </>)}

        </Stack.Navigator>
    );
}