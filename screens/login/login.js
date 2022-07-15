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

import styles from './styleLogin';

import { signInWithEmailAndPassword } from "firebase/auth";
import { getAuth, onAuthStateChanged } from "firebase/auth";


import firebase from '../../src/config/firebase';

import logoGoogle from '../../assets/login/google.jpg'

// You can use your custom background image
import BackgroundImage from '../../assets/login/fundoLogin.jpg';

import { useFonts } from 'expo-font';


import { Icon } from 'react-native-elements';

export default function Login({ navigation }) {

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigation.navigate("home", { idUser: user.uid })
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorLogin, setErrorLogin] = useState("")



  const loginFirebase = () => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        console.log(user)
        navigation.navigate("home", { idUser: user.uid })
        // ...
      })
      .catch((error) => {
        setErrorLogin(true)
        console.log("erro")
        var errorCode = error.code;
        var errorMessage = error.message;
      });
  }

  const [loaded] = useFonts({});

  if (!loaded || !BackgroundImage) {
    return <Text>Loading...</Text>;
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={{ flex: 1 }}>
          <Image
            style={{ flex: 1, width: null, marginTop: -300, resizeMode: 'contain' }}
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
              color='#2B0548'
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
              color='#2B0548'
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
          <TouchableOpacity style={styles.loginButton} onPress={loginFirebase}>
            <Text style={styles.loginButtonText}>Entrar</Text>
          </TouchableOpacity>
          <Button title='Teste'></Button>
          <Text style={styles.registerText}>
            Não tem uma conta?
            <Text onPress={() => navigation.navigate("registerUser")} style={{ color: '#2B0548' }}>
              {' Cadastre-se'}
            </Text>
          </Text>
        </View>

        <View style={styles.EntrarGoogle}>

          <TouchableOpacity style={styles.buttonGoogle}>

            <Image source={logoGoogle} style={{ width: 36, height: 36 }} />
            <Text>Google</Text>

          </TouchableOpacity>

        </View>

      </View>
    </TouchableWithoutFeedback>
  );
}

