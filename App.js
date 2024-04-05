import { NavigationContainer } from '@react-navigation/native';
import MyStack from './src/router/stacknavigation';
import AuthProvider from './src/context/context';
import ShareContext from './src/context/shareContext';
import {
  useFonts,
  K2D_100Thin,
  K2D_100Thin_Italic,
  K2D_200ExtraLight,
  K2D_200ExtraLight_Italic,
  K2D_300Light,
  K2D_300Light_Italic,
  K2D_400Regular,
  K2D_400Regular_Italic,
  K2D_500Medium,
  K2D_500Medium_Italic,
  K2D_600SemiBold,
  K2D_600SemiBold_Italic,
} from '@expo-google-fonts/k2d';


export default function App() {
  let [fontsLoaded]=useFonts({
    K2D_100Thin,
    K2D_100Thin_Italic,
    K2D_200ExtraLight,
    K2D_200ExtraLight_Italic,
    K2D_300Light,
    K2D_300Light_Italic,
    K2D_400Regular,
    K2D_400Regular_Italic,
    K2D_500Medium,
    K2D_500Medium_Italic,
    K2D_600SemiBold,
    K2D_600SemiBold_Italic,
  });

  if(!fontsLoaded){
    return null
  }
  return (
    <NavigationContainer>
      {/* <ShareContext > */}
        <AuthProvider>
          <MyStack />
        </AuthProvider>
      {/* </ShareContext> */}
    </NavigationContainer>
  );
}


