// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAnalytics} from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDjjCkf_qMAFySDtB1x9xdPD0sQlVXDgNM',
  authDomain: 'scanning-app-28ae0.firebaseapp.com',
  projectId: 'scanning-app-28ae0',
  storageBucket: 'scanning-app-28ae0.appspot.com',
  messagingSenderId: '5080861642',
  appId: '1:5080861642:web:e71e61a0fa7776b66e9d33',
  measurementId: 'G-9C1X1XLQ8D',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
