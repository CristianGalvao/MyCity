import React, { useState } from 'react';
import { View, TextInput, Text, Button } from 'react-native';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import firebase from '../../src/config/firebase';

export default function RegisterUser() {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const register = () => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(user)
                // ...
            })
            .catch((error) => {
                console.log("erro")
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
    }

    return (

        <View style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

            <TextInput onChangeText={setEmail} style={{ borderColor: 'color', borderWidth: 1, width: '100%', height: 20 }}></TextInput>
            <TextInput onChangeText={setPassword} style={{ borderColor: 'color', borderWidth: 1, width: '100%', height: 20 }}></TextInput>
            <Button title='Enviar' onPress={register}></Button>

        </View>
    )
}