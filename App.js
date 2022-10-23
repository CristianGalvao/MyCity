import React from 'react';
// IMPORTANDO AS NAVEGAÇÕES DO STACK
import StackScreens from './navigation/stack';

// IMPORTAÇÕES DE LOGIN GOOGLE
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';


export default function App() {

  return (

    <StackScreens/>

  );
}
