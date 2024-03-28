import { NavigationContainer } from '@react-navigation/native';
import MyStack from './src/router/stacknavigation';
import AuthProvider from './src/context/context';


export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <MyStack />
      </AuthProvider>
    </NavigationContainer>
  );
}


