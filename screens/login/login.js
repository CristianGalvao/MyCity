import React from 'react';
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

import logoGoogle from '../../assets/login/google.jpg'

// You can use your custom background image
import BackgroundImage from '../../assets/login/fundoLogin.jpg';

import { useFonts } from 'expo-font';

import { Icon } from 'react-native-elements';

export default function LoginScreen4() {
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
            />
          </View>
          <Text style={styles.fpText}>Esqueceu a senha?</Text>
          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Entrar</Text>
          </TouchableOpacity>
          <Text style={styles.registerText}>
            Não tem uma conta?
            <Text style={{ color: '#2B0548' }}>
              {' Cadastre-se'}
            </Text>
          </Text>
        </View>

        <View style={styles.EntrarGoogle}>

          <TouchableOpacity style={styles.buttonGoogle}>

            <Image source={logoGoogle} style={{width: 36, height: 36}}/>
            <Text>Google</Text>

          </TouchableOpacity>

        </View>

      </View>
    </TouchableWithoutFeedback>
  );
}

