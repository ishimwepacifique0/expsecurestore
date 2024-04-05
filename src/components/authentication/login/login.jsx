import React, { useState,useContext } from 'react';
import { StyleSheet, View, TextInput, Text, TouchableOpacity, Keyboard } from 'react-native';
import { AuthContext } from '../../../context/context';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { FIREBASE_AUTH, FIREBASE_DB } from '../../../../firebaseconfiguretion';
import { doc,getDoc } from 'firebase/firestore';



const emailValidation = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const {checkusertype,setCheckusertype,setLog} = useContext(AuthContext)


  const _handlePress = async() => {
    Keyboard.dismiss();
    if (!emailValidation.test(email)) {
      setEmailError('Please enter a valid email address');
    } else if (password.length < 6) {
      setPasswordError('Password must be at least 8 characters long');
    } else {
      
      console.log('Email:', email);
      console.log('Password:', password);
      try {
        
        const { user } = await signInWithEmailAndPassword(FIREBASE_AUTH, email, password);
        console.log("User logged in successfully:", user.uid);
      
        const userDoc = doc(FIREBASE_DB, "user", user.uid);
        const singleDoc = await getDoc(userDoc);
        console.log(singleDoc.data())
        if (singleDoc.exists()) {
          const userData = singleDoc.data();
          
          if (userData && userData.accounttype === "customer") {
            console.log("User is a customer.");
            setCheckusertype("customer");
            setLog(true)
          } else if (userData && userData.accounttype === "admin") {
            console.log("User is an admin.");
            setCheckusertype("admin")
            setLog(true);
          } else {
            
            console.log("Invalid account type or no account type specified.");
          } 
        } else {
         
          console.log("User document does not exist.");
        }
      } catch (error) {
        console.error("Error logging in:", error);
        
      }
      
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.errorText}>{emailError}</Text>
      <View style={styles.inputView}>
        <Text style={{fontFamily:'K2D_500Medium_Italic'}}>Email</Text>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          value={email}
          onChangeText={(email) => setEmail(email)}
        />
      </View>
      <Text style={styles.errorText}>{passwordError}</Text>
      <View style={styles.inputView}>
      <Text style={{fontFamily:' K2D_600SemiBold'}}>Password</Text>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          value={password}
          onChangeText={(password) => setPassword(password)}
          secureTextEntry
        />
      </View>
      <TouchableOpacity style={styles.loginBtn} onPress={_handlePress}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 300,
    alignItems: 'center',
  },
  inputView: {
    height: 45,
    marginBottom: 20,
    alignItems: 'center',
  },
  TextInput: {
    height: 50,
    width: 300,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    borderRadius: 25,
  },
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    backgroundColor: '#FF1493',
  },
  loginText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  errorText: {
    fontSize: 10,
    color: 'red',
  },
});