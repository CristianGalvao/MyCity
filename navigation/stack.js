import React from "react";
//Importando a tela Login
import Login from '../private/login/login';
//Importando o Stack
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';

export default function NavigationStack() {

    const Stack = createNativeStackNavigator();

    return(

        <NavigationContainer>

            <Stack.Navigator>
    
                <Stack.Screen name="login" component={Login} 
                
                    options={{
                        headerShown: false
                    }}

                />
    
            </Stack.Navigator>
            
        </NavigationContainer>
    )

}
