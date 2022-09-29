import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Pressable } from 'react-native'
import { styles } from '../styles/cadastroStyles'
import api from "../config/conex";
import { Ionicons } from '@expo/vector-icons'



export const TelaCadastro = ({navigation}) => {
    const [hidePass, setHidePass] = useState(true);
    const [mode, setMode] = useState('eye')
    const [num, setNum] = useState('')
    const [pass, setPass] = useState('')
    const [conf, setConf] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    function cadastrar(){
        if(pass == conf){
        api.post('api/aluno/save',{
            nome:name,
            codMatricula:num,
            email:email,
            senha:pass
        }) .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
        navigation.navigate('Login')
    }else{

            alert('Senhas não coincidem')
            
        }
    }

    return (

        <View style={{
            backgroundColor: "#82BFF5",
            height: "100%",
            alignItems: "center",
            justifyContent: 'center',
            flexDirection: "column",
        }}>
            <View style={{
                backgroundColor: "white",
                height: "80%",
                borderRadius: 30,
                width: "80%",
                marginBottom:'5%'
            }}
            >
                <Text style={{ fontSize: 15, marginTop: 20, marginLeft: 30, marginBottom: 2 }}>
                    Nome
                </Text>
                <TextInput
                    
                    
                    style={styles.input}
                    placeholder="Digite seu nome"
                    placeholderTextColor="lightgray"
                    onChangeText={value => setName(value)}
                />
                <Text style={{ fontSize: 15, marginTop: 20, marginLeft: 30, marginBottom: 2 }}>
                    Número de Matrícula
                </Text>
                <TextInput
                    maxLength={9}
                    style={styles.input}
                    placeholder="Digite seu número de matrícula"
                    placeholderTextColor="lightgray"
                    onChangeText={value => setNum(value)}
                />
                <Text style={{ fontSize: 15, marginTop: 20, marginLeft: 30, marginBottom: 2 }}>
                    E-mail
                </Text>
                <TextInput
                    
                    style={styles.input}
                    placeholder="Digite seu e-mail"
                    placeholderTextColor="lightgray"
                    onChangeText={value => setEmail(value)}
                />
                <Text style={{ fontSize: 15, marginTop: 20, marginLeft: 30, marginBottom: 2 }}>
                    Senha
                </Text>
                <View style={styles.input}>
                    <TextInput
                        style={{ width: "80%", height: "100%", fontSize: 15 }}
                        placeholder="Digite sua senha"
                        placeholderTextColor="lightgray"
                        secureTextEntry={hidePass}
                        onChangeText={value => setPass(value)}
                    />
                    <TouchableOpacity style={styles.icon}
                    >

                        <Ionicons name={mode}
                            onPress={
                                () => {
                                    if (mode == 'eye') {
                                        setMode('md-eye-off')
                                        setHidePass(!hidePass)
                                    }
                                    else if (mode == 'md-eye-off') {
                                        setMode('eye')
                                        setHidePass(!hidePass)
                                    }
                                }}
                            color='black' size={25} />
                    </TouchableOpacity>


                </View>
                <Text style={{ fontSize: 15, marginTop: 20, marginLeft: 30, marginBottom: 2 }}>
                    Confirmar Senha
                </Text>
                <View style={styles.input}>
                    <TextInput
                        style={{ width: "80%", height: "100%", fontSize: 15 }}
                        placeholder="Repita sua senha"
                        placeholderTextColor="lightgray"
                        secureTextEntry={hidePass}
                        onChangeText={value => setConf(value)}
                    />
                    <TouchableOpacity style={styles.icon}
                    >

                        <Ionicons name={mode}
                            onPress={
                                () => {
                                    if (mode == 'eye') {
                                        setMode('md-eye-off')
                                        setHidePass(!hidePass)
                                    }
                                    else if (mode == 'md-eye-off') {
                                        setMode('eye')
                                        setHidePass(!hidePass)
                                    }
                                }}
                            color='black' size={25} />
                    </TouchableOpacity>
                </View>
            </View>
            <Pressable style={styles.button} onPress={() => { 
            cadastrar()
            }}
      >
        <Text style={styles.text}>Cadastrar</Text>
      </Pressable>
        </View>

    )



}