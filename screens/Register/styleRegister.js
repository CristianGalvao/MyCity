import React from "react";
import { StyleSheet } from "react-native";

export default StyleSheet.create({

    container:{
        backgroundColor: 'white',
        flex: 1
    },

    viewTitle:{
        width: '80%',
        height: 'auto',
        marginTop: 30,
        marginLeft: '5%'
    },

    txtTitle:{
        fontSize: 35,
        fontWeight: 'bold'
    
    },

    txtSubTitle:{
        fontSize: 16,
        marginTop: 10
    },

    txtSubTitle2:{
        fontSize: 16,
       
    },

    btnCadastrar:{
        width: '100%',
        backgroundColor: 'blue',
        marginTop: 20,
        marginBottom: 20,
        borderRadius: 20,
        padding: 7
    },

    txtCadastrar:{
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18
    }


});