import React from "react";
//Importando a tela Login
import Login from '../screens/login/login';
import Home from "../screens/pages/home/home";
import RegisterUser from "../screens/register/registerUser";
//Importando o Stack
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';

export default function NavigationStack() {

    const Stack = createNativeStackNavigator();

    return (

        <NavigationContainer>

            <Stack.Navigator>

                <Stack.Screen name="login" component={Login}
                    options={{
                        headerShown: false
                    }} />

                <Stack.Screen name="home" component={Home}/>
                <Stack.Screen name="registerUser" component={RegisterUser}/>

            </Stack.Navigator>

        </NavigationContainer>
    )

}
