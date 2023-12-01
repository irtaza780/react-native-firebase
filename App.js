// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
// import React, {useState, useEffect} from 'react';
// import {firebase} from './config';

// import Login from './src/Login';
// import Registration from './src/Registration';
// import Dashboard from './src/Dashboard';
// import Header from './components/Header';

// const Stack = createStackNavigator();

// const App = () => {
//   const [initializing, setInitializing] = useState(true);
//   const [user, setUser] = useState(null);

//   const onAuthStateChanged = user => {
//     setUser(user);
//     if (initializing) setInitializing(false);
//   };

//   useEffect(() => {
//     const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
//     console.log('firebase subscriber');
//     return subscriber;
//   }, []);

//   if (initializing) return null;

//   return (
//     <NavigationContainer>
//       <Stack.Navigator
//         screenOptions={{
//           headerStyle: {
//             height: 120,
//             backgroundColor: '#323232',
//             elevation: 8,
//           },
//           headerTitleStyle: {
//             fontSize: 24,
//             fontWeight: 'bold',
//             color: '#fff',
//           },
//           headerTitleAlign: 'center',
//           headerTintColor: '#fff',
//           headerTitle: props => <Header name={props.scene.route.name} />,
//         }}>
//         {user ? (
//           <Stack.Screen name="Dashboard" component={Dashboard} />
//         ) : (
//           <>
//             <Stack.Screen
//               name="Login"
//               component={Login}
//               options={{
//                 headerTitle: 'Login',
//               }}
//             />
//             <Stack.Screen
//               name="Registration"
//               component={Registration}
//               options={{
//                 headerTitle: 'Registration',
//               }}
//             />
//           </>
//         )}
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;

import React from 'react';
import './src/config/firebase';
import RootNavigation from './src/navigation';

export default function App() {
  return <RootNavigation />;
}
