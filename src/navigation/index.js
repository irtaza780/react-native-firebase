import React from 'react';
import {useAuth} from '../hooks/useAuth';
import Dashboard from '../Dashboard';
import AuthStack from './authStack';

export default function RootNavigation() {
  const {user} = useAuth();

  console.log('user is ', user);

  return user ? <Dashboard /> : <AuthStack />;
}
