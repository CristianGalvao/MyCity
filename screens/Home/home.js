import React from "react";
import {View, Text, Button} from 'react-native';
// IMPORTAÇÕES DE LOGIN GOOGLE
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

export default function Home({route, navigation}){

    async function signOutGoogle(){
        await GoogleSignin.signOut();
        console.log("Voce deslogou");
        navigation.navigate("login");
      }

    return(
        <View>

                <Text>{route.params.userData.user.email}</Text>
                <Text>{route.params.userData.user.name}</Text>

                <Button title='Sair' onPress={signOutGoogle}></Button>

        </View>
    )
}