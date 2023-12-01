import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';
// import {firebase} from '../config';

import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
const auth = getAuth();

const Registration = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const [error, setError] = useState({});

  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  useEffect(() => {
    if (password !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match');
    } else {
      setConfirmPasswordError('');
    }
  }, [password, confirmPassword]);

  const validateFields = async () => {
    let errorVar = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '' || email === null) {
      errorVar['emailError'] = 'Email is required';
    } else if (!emailPattern.test(email)) {
      errorVar['emailError'] = 'Please provide a valid email address';
    }
    if (password === '' || password === null) {
      errorVar['passwordError'] = 'Password is required';
    }
    if (confirmPassword === '' || confirmPassword === null) {
      errorVar['confirmPasswordError'] = 'Please re-enter your password';
    }
    if (firstName === '' || firstName === null) {
      errorVar['firstNameError'] = 'First Name is required';
    }
    if (lastName === '' || lastName === null) {
      errorVar['lastNameError'] = 'Last Name is required';
    }
    setError(errorVar);
    return errorVar;
  };

  const isEmpty = obj => {
    return obj && Object.keys(obj).length === 0 && obj.constructor === Object;
  };

  useEffect(() => {
    console.log('error is ', error);
  }, [error]);

  const handleRegistration = async (email, password) => {
    try {
      setError({});

      const errorFields = validateFields();

      if (!isEmpty(errorFields?._j)) {
        setTimeout(() => {
          console.log('executing  set timeout');
          setError({});
        }, 3000);
        console.log('Invalid input');
        return;
      }
      console.log('mn reaching this console');

      const res = await createUserWithEmailAndPassword(auth, email, password);

      console.log('response is ', res);
    } catch (error) {
      console.log('error catch ', error);
      alert(error.message);
    }
  };

  const ErrorText = value => {
    return <Text style={styles.errorText}>{value}</Text>;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registration</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="First Name"
          onChangeText={firstName => setFirstName(firstName)}
          autoCapitalize="none"
          autoCorrect={false}
        />
        {error?.firstNameError && ErrorText(error?.firstNameError)}

        <TextInput
          style={styles.textInput}
          placeholder="Last Name"
          onChangeText={lastName => setLastName(lastName)}
          autoCapitalize="none"
          autoCorrect={false}
        />

        {error?.lastNameError && ErrorText(error?.lastNameError)}

        <TextInput
          style={styles.textInput}
          placeholder="Email"
          onChangeText={email => setEmail(email)}
          autoCapitalize="none"
          autoCorrect={false}
        />
        {error?.emailError && ErrorText(error?.emailError)}

        <TextInput
          style={styles.textInput}
          placeholder="Password"
          onChangeText={password => setPassword(password)}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
        />

        {error?.passwordError && ErrorText(error?.passwordError)}

        <TextInput
          style={styles.textInput}
          placeholder="Confirm Password"
          onChangeText={confirmPassword => setConfirmPassword(confirmPassword)}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
        />
        {error?.confirmPasswordError && ErrorText(error?.confirmPasswordError)}
      </View>

      {confirmPasswordError && (
        <Text style={styles.errorTextPassword}>{confirmPasswordError}</Text>
      )}
      <TouchableOpacity style={styles.button} onPress={handleRegistration}>
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Sign In')}
        style={styles.loginLink}>
        <Text style={styles.loginText}>Already have an account? Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Registration;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  textInput: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 8,
    marginBottom: 12,
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
  errorText: {
    color: 'red',
    fontSize: 11,
    marginBottom: 5,
  },
  errorTextPassword: {
    color: 'red',
    fontSize: 11,
    marginBottom: 10,
  },
  loginLink: {
    marginBottom: 20,
  },
  loginText: {
    marginTop: 20,
    color: '#333333',
    fontSize: 14,
  },
});
