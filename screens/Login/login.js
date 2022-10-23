import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Dimensions,
    Button,
    Keyboard,
} from 'react-native';

import LogoImg from '../../assets/login/logoMyCity.png';

// IMPORTAÇÕES DE LOGIN GOOGLE
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

import styles from './styleLogin';

import logoGoogle from '../../assets/login/google.jpg';

// You can use your custom background image
import BackgroundImage from '../../assets/login/loginImg.png';

import { useFonts } from 'expo-font';

import { Icon } from 'react-native-elements';

export default function Login({ navigation }) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [loaded] = useFonts({});

    if (!loaded || !BackgroundImage) {
        return <Text>Loading...</Text>;
    }

    //   LOGIN GOOGLE
    GoogleSignin.configure({
        webClientId: '755994611357-b6a9l2iqjph0ospce8citp6mk5mecqid.apps.googleusercontent.com',
    });

    async function onGoogleButtonPress() {
        // Get the users ID token
        await GoogleSignin.hasPlayServices();
        const { idToken } = await GoogleSignin.signIn();
        const userInfo = await GoogleSignin.signIn();
        console.log(userInfo.user.email)
        navigation.navigate('home', {userData: userInfo})
        // Create a Google credential with the token
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    
        // Sign-in the user with the credential
        return auth().signInWithCredential(googleCredential);
      }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.container}>
                <View style={{ flex: 1, backgroundColor: 'black' }}>
                    <Image
                        style={{ flex: 1, resizeMode: 'stretch', width: null }}
                        source={BackgroundImage}
                    />
                </View>

                <View style={styles.bottomView}>
                    <Text style={styles.loginText}>Entrar</Text>
                    <View style={styles.inputView}>
                        <Icon
                            style={styles.inputIcon}
                            name='person'
                            type='ionicons'
                            color='blue'
                        />
                        <TextInput
                            style={styles.input}
                            placeholder='E-mail'
                            autoCapitalize='none'
                            keyboardType='email-address'
                            textContentType='emailAddress'
                            onChangeText={setEmail}


                        />
                    </View>
                    <View style={styles.inputView}>
                        <Icon
                            style={styles.inputIcon}
                            name='lock'
                            type='ionicons'
                            color='blue'
                        />
                        <TextInput
                            style={styles.input}
                            placeholder='Senha'
                            secureTextEntry={true}
                            autoCapitalize='none'
                            onChangeText={setPassword}

                        />
                    </View>
                    <Text style={styles.fpText}>Esqueceu a senha?</Text>
                    <TouchableOpacity style={styles.loginButton}>
                        <Text style={styles.loginButtonText}>Entrar</Text>
                    </TouchableOpacity>
                    <Text style={styles.registerText}>
                        Não tem uma conta?
                        <Text onPress={() => navigation.navigate("register")} style={{ color: 'blue' }}>
                            {' Cadastre-se'}
                        </Text>
                    </Text>
                </View>

                <View style={styles.EntrarGoogle}>

                    <TouchableOpacity style={styles.buttonGoogle} onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))}
>

                        <Image source={logoGoogle} style={{ width: 36, height: 36 }} />
                        <Text>Google</Text>

                    </TouchableOpacity>

                </View>

            </View>
        </TouchableWithoutFeedback>
    );
}

