import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
// IMPORTAÇÕES DE LOGIN GOOGLE
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

import {Image} from 'react-native';

// IMPORTANDO TELAS DE LOGIN E CADASTRO
import Login from '../screens/Login/login';
import Register from '../screens/Register/register';

// IMPORTANDO TELA HOME
import Home from '../screens/Home/home';

// IMPORTANDO A LOGO
import LogoImg from '../assets/login/logoMyCity.png';


export default function StackScreenAll() {

    function LogoImgHeader(){
        return(
            <Image source={LogoImg} style={{width: '68%', height: 55}}/>
        )
    }

    // IMPORTANDO O STACK
    const Stack = createNativeStackNavigator();

    return (

        <NavigationContainer>
            <Stack.Navigator initialRouteName='login'>

                {/* ADICIONANDO AS TELAS DE LOGIN E CADASTRO */}
                <Stack.Screen name='login' component={Login} options={{ headerShown: false }} />
                <Stack.Screen name='register' component={Register} options={{

                    headerTitle: (props) => <LogoImgHeader {...props} /> }}/>

                <Stack.Screen name='home' component={Home} options={{ headerShown: false, headerTitleAlign: 'center' }} />



            </Stack.Navigator>
        </NavigationContainer>

    )
}