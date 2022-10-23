import React, { useState } from "react";
import { View, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native';

// IMPORTANDO OS ESTILOS
import styleRegister from "./styleRegister";

// IMPORTANDO OS ESTILOS DO LOGIN
import styles from '../Login/styleLogin';

// IMPORTANDO OS ICONES
import { Icon } from 'react-native-elements';

// IMPORTANDO O CONTROLLER PARA ALTERAR OS CAMPOS 
import { Controller, set, useForm } from "react-hook-form";

// IMPORTANDO MASCARA DOS CAMPOS
import { MaskedTextInput } from "react-native-mask-text";

// IMPORTANDO OS ICONES
import { FontAwesome, FontAwesome5, MaterialCommunityIcons, MaterialIcons, Ionicons } from '@expo/vector-icons';

export default function Register() {

    // CONSTANTES QUE SERÃO ATRIBUIDOS OS DADOS
    const [cpf, setCpf] = useState(' ');
    const [cep, setCEP] = useState(' ');
    const [password, setPassword] = useState(' ');
    const [hidePassword, setHidePassword] = useState(null);
    const [hidePassword2, setHidePassword2] = useState(null);
    const [confirmPassword, setConfirmPassword]  = useState(' ')

    // FUNÇÃO PARA VALIDAR CPF
    function isValidCPF(cpf) {

        if (typeof cpf !== 'string') return false
        cpf = cpf.replace(/[^\d]+/g, '')
        if (cpf.length !== 11 || !!cpf.match(/(\d)\1{10}/)) return false
        cpf = cpf.split('').map(el => +el)
        const rest = (count) => (cpf.slice(0, count - 12)
            .reduce((soma, el, index) => (soma + el * (count - index)), 0) * 10) % 11 % 10
        return rest(10) === cpf[9] && rest(11) === cpf[10]
    }

    const { handleSubmit, control, errors } = useForm();

    return (
        <View style={styleRegister.container}>

            <View style={styleRegister.viewTitle}>

                <Text style={styleRegister.txtTitle}>Cadastre-se aqui</Text>

                <Text style={styleRegister.txtSubTitle}>Novo aqui?</Text>
                <Text style={styleRegister.txtSubTitle2}>Bora se cadastrar!</Text>

            </View>

                <ScrollView>

            <View style={{ width: '90%', marginTop: 20, marginLeft: '5%' }}>

                {/* CAMPO NOME */}
                <View style={styles.inputView}>
                    <Icon
                        style={styles.inputIcon}
                        name='person'
                        type='ionicons'
                        color='blue'
                    />
                    <TextInput
                        style={styles.input}
                        placeholder='Nome'
                        autoCapitalize='none'
                        keyboardType='email-address'
                        textContentType='emailAddress'
                    // onChangeText={setEmail}
                    />
                </View>


                {/* CAMPO SOBRENOME */}
                <View style={styles.inputView}>
                    <Icon
                        style={styles.inputIcon}
                        name='person'
                        type='ionicons'
                        color='blue'
                    />
                    <TextInput
                        style={styles.input}
                        placeholder='Sobrenome'
                        autoCapitalize='none'
                        keyboardType="default"
                    // onChangeText={setEmail}
                    />
                </View>

                {/* CAMPO CPF */}
                <View style={styles.inputView}>
                    <Controller
                        control={control}
                        rules={{
                            maxLength: 14,
                            required: false,

                        }}
                        render={({ field: { onChange, onBlur, value } }) =>
                            <><FontAwesome name="address-card-o" color="blue" style={{ paddingHorizontal: 11, fontSize: 20 }} />
                                <MaskedTextInput
                                    style={styles.input}
                                    // onBlur={onBlur}
                                    onChangeText={text => setCpf(text)}
                                    keyboardType="numeric"
                                    mask="999.999.999-99"
                                    // value={value}

                                    placeholder={"CPF"} /></>}
                        name="cpf"
                    />

                </View>

                {!isValidCPF(cpf) && cpf.length > 0 ? <Text style={{ color: 'red', textAlign: 'left', marginLeft: '5%', marginTop: '3%' }}>CPF inválido</Text> : null}


                {/* CAMPO CEP */}
                <View style={styles.inputView}>
                    <Controller
                        control={control}
                        rules={{
                            maxLength: 14,
                            required: false,

                        }}
                        render={({ field: { onChange, onBlur, value } }) =>
                            <><FontAwesome name="sort-alpha-desc" color="blue" style={{ paddingHorizontal: 11, fontSize: 20 }} />
                                <MaskedTextInput
                                    style={styles.input}
                                    // onBlur={onBlur}
                                    onChangeText={text => setCEP(text)}
                                    keyboardType="numeric"
                                    mask="99999-999"
                                    // value={value}

                                    placeholder={"CEP"} /></>}
                        name="cpf"
                    />

                </View>

                {/* CAMPO ENDEREÇO */}
                <View style={styles.inputView}>
                    <FontAwesome
                        style={styles.inputIcon}
                        name='binoculars'
                        type='ionicons'
                        color='blue'
                    />
                    <TextInput
                        style={styles.input}
                        placeholder='Endereço'
                        autoCapitalize='none'
                        keyboardType="default"
                    // onChangeText={setEmail}
                    />
                </View>

                {/* CAMPO NUMERO */}
                <View style={styles.inputView}>
                    <Icon
                        style={styles.inputIcon}
                        name='home'
                        type='ionicons'
                        color='blue'
                    />
                    <TextInput
                        style={styles.input}
                        placeholder='Numero'
                        autoCapitalize='none'
                        keyboardType="default"
                    // onChangeText={setEmail}
                    />
                </View>

                {/* CAMPO COMPLEMENTO */}
                <View style={styles.inputView}>
                    <Icon
                        style={styles.inputIcon}
                        name='person'
                        type='ionicons'
                        color='blue'
                    />
                    <TextInput
                        style={styles.input}
                        placeholder='Complemento'
                        autoCapitalize='none'
                        keyboardType="default"
                    // onChangeText={setEmail}
                    />
                </View>


                {/* CAMPO E-MAIL */}
                <View style={styles.inputView}>
                    <Icon
                        style={styles.inputIcon}
                        name='email'
                        type='ionicons'
                        color='blue'
                    />
                    <TextInput
                        style={styles.input}
                        placeholder='E-mail'
                        autoCapitalize='none'
                        keyboardType='email-address'
                        textContentType='emailAddress'
                    // onChangeText={setEmail}
                    />

               
                </View>

                     {/* CAMPO SENHA */}

                <View style={styles.inputView}>
                    <Controller
                        control={control}
                        rules={{
                            maxLength: 15,
                            minLength: 6,
                            required: true
                        }}
                        render={({ field: { onChange, onBlur, value } }) =>
                            <><FontAwesome name="lock" style={{ paddingHorizontal: 11, fontSize: 25 }}  color="blue" />
                                <TextInput
                                    style={styles.input}
                                    onBlur={onBlur}
                                    onChangeText={setPassword}
                                    // value={value}
                                    textContentType="password"
                                    secureTextEntry={hidePassword}
                                    placeholder={"Senha"} /></>}
                        name="senha"
                    />



                    <TouchableOpacity
                        style={styles.icon}
                        onPress={() => setHidePassword(!hidePassword)}
                    >
                        {hidePassword
                            ? <Ionicons name="eye" color="#0445ba" size={17} style={{ paddingHorizontal: 11, fontSize: 20 }} />
                            : <Ionicons name="eye-off" color="#0445ba" size={17} style={{ paddingHorizontal: 11, fontSize: 20 }}  />}
                    </TouchableOpacity>
            
                </View>

                   
                    {/* CONFIRMAR SENHA */}
                    <View style={styles.inputView}>
                    <Controller
                        control={control}
                        rules={{
                            maxLength: 15,
                            minLength: 6,
                            required: true
                        }}
                        render={({ field: { onChange, onBlur, value } }) =>
                            <><FontAwesome name="lock" style={{ paddingHorizontal: 11, fontSize: 25 }}  color="blue" />
                                <TextInput
                                    style={styles.input}
                                    onBlur={onBlur}
                                    onChangeText={setConfirmPassword}
                                    // value={value}
                                    textContentType="password"
                                    secureTextEntry={hidePassword2}
                                    placeholder={"Confirmar Senha"} /></>}
                        name="senha"
                    />



                    <TouchableOpacity
                        style={styles.icon}
                        onPress={() => setHidePassword2(!hidePassword2)}
                    >
                        {hidePassword2
                            ? <Ionicons name="eye" color="#0445ba" size={17} style={{ paddingHorizontal: 11, fontSize: 20 }} />
                            : <Ionicons name="eye-off" color="#0445ba" size={17} style={{ paddingHorizontal: 11, fontSize: 20 }}  />}
                    </TouchableOpacity>
            
                </View>

                <TouchableOpacity style={styleRegister.btnCadastrar}>

                    <Text style={styleRegister.txtCadastrar}>Cadastrar</Text>

                </TouchableOpacity>

            </View>

            </ScrollView>

        </View >
    )
}