import React, { useState,useContext } from 'react';
import { StyleSheet, View, TextInput, Text, TouchableOpacity, Keyboard } from 'react-native';
import { AuthContext } from '../../../context/context';

const emailValidation = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const context = useContext(AuthContext)


  const _handlePress = () => {
    Keyboard.dismiss();
    if (!emailValidation.test(email)) {
      setEmailError('Please enter a valid email address');
    } else if (password.length < 6) {
      setPasswordError('Password must be at least 8 characters long');
    } else {
      
      console.log('Email:', email);
      console.log('Password:', password);
      context.login(email,password)
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.errorText}>{emailError}</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          value={email}
          onChangeText={(email) => setEmail(email)}
        />
      </View>
      <Text style={styles.errorText}>{passwordError}</Text>
      <View style={styles.inputView}>
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