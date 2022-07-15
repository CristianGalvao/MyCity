import React from "react";
import { View, Text, Button } from 'react-native';

import {getAuth, signOut } from "firebase/auth";

export default function Home({ route, navigation }) {

    const logout = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            navigation.navigate('login')
        }).catch((error) => {
            // An error happened.
        });
    }

    return (
        <View style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

            <Text>TELA HOME</Text>
            <Text>{route.params.idUser}</Text>

            <Button title="Sair" onPress={logout}></Button>

        </View>
    )
}