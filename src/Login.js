import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();

  const [firstName, setFirstName] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (firstName && password) {
      Alert.alert('Login Successful!');
    } else {
      Alert.alert('Error', 'Please enter both first name and password.');
    }
  };

  const handleCreateAccountPress = () => {
    navigation.navigate('Sign Up');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
      <TextInput
        style={styles.input}
        placeholder="First Name"
        onChangeText={setFirstName}
        value={firstName}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>SIGN IN</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.forgotPasswordButton}>
        <Text style={styles.forgotPasswordText}>Forgot your password?</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.createAccountButton}
        onPress={handleCreateAccountPress}>
        <Text style={styles.createAccountText}>
          Don't have an account? Create Account
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    // To create a linear gradient background
    backgroundImage: `linear-gradient(to bottom right, #FF0000, #0000FF)`,
  },
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    color: '#333333',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 44,
    padding: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 6,
  },
  button: {
    width: '80%',
    height: 44,
    backgroundColor: '#333333',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
  },
  forgotPasswordButton: {
    alignItems: 'center',
    marginTop: 10,
  },
  forgotPasswordText: {
    color: '#333333',
    fontSize: 14,
  },
  createAccountButton: {
    alignItems: 'center',
    marginTop: 10,
  },
  createAccountText: {
    color: '#333333',
    fontSize: 14,
  },
});

export default Login;
