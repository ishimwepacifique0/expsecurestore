import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity,Keyboard } from 'react-native';
const emailValidation = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export default function RegisterForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [telephone, setTelephone] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [telephoneError, setTelephoneError] = useState('');

  const _handlePress = () => {
    Keyboard.dismiss();
    if (!emailValidation.test(email)) {
      setEmailError('Please enter a valid email address');
    } else if (password.length < 8) {
      setPasswordError('Password must be at least 8 characters long');
    } else {
      // submit the form
      console.log('Email:', email);
      console.log('Password:', password);
      console.log('Username:', username);
      console.log('Telephone:', telephone);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.errorText}>{emailError}</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(email) => setEmail(email)}
      />
      <Text style={styles.errorText}>{passwordError}</Text>
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={(password) => setPassword(password)}
        secureTextEntry
      />
      <Text style={styles.errorText}>{usernameError}</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={(username) => setUsername(username)}
      />
      <Text style={styles.errorText}>{telephoneError}</Text>
      <TextInput
        style={styles.input}
        placeholder="Telephone"
        value={telephone}
        onChangeText={(telephone) => setTelephone(telephone)}
      />
      <TouchableOpacity style={styles.button} onPress={_handlePress}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    width: 300,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
  },
  label: {
    paddingHorizontal: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    alignItems: 'center',
    marginVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  link: {
    alignItems: 'center',
    marginVertical: 10,
  },
  linkText: {
    fontSize: 16,
  },
});