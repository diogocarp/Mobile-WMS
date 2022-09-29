import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Image,
  TextInput,
  Button,
  Text,
  Pressable
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from '@expo/vector-icons'
import { styles } from '../styles/loginStyle'
import api from "../config/conex";






const TelaLogin = ({ navigation }) => {
  const [hidePass, setHidePass] = useState(true);
  const [mode, setMode] = useState('eye')
  const [pass, setPass] = useState('')
  const [num, setNum] = useState('')
  const [aluno, setAluno] = useState();
  
    
 async function login(){ 
  const res = await api.get(`api/aluno/17`);
  
    setAluno(res.data);
    console.log(res.data)
   var numMat = res.data.codMatricula
   var password = res.data.senha
   console.log(numMat)
     if(num == numMat){
      navigation.navigate('WMS - Mobile')
   
    }else {
      alert('Usuario não existe');
      
     }

 }
   
  return (
    <View
      style={{
        backgroundColor: "#82BFF5",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >

      <View style={{ width: '100%' }}>

        <Image source={require('../assets/5.png')} style={{ height: 120, width: 120, left: "34%" }} />

        <Image source={require('../assets/6.png')} style={{ height: 50, width: 120, left: "37%" }} />
      </View>


      <View
        style={{
          marginTop: 30,
          backgroundColor: "white",
          height: "35%",
          borderRadius: 30,
          width: "85%",

        }}
      >
        <Text style={{ fontSize: 15, marginTop: 20, marginLeft: 30, marginBottom:2  }}>
          Número de Matrícula
        </Text>
        <TextInput
          maxLength={9}
          style={styles.input}
          placeholder="Digite seu número de matrícula"
          placeholderTextColor="lightgray"
          onChangeText={value => setNum(value)}
        />
        <Text style={{ fontSize: 15, marginTop: 20, marginLeft: 30, marginBottom:2 }}>
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
        <View style={{ flexDirection:"row", justifyContent:"space-between",alignItems:"center", display:"flex", width:'100%'}}>
        <Pressable onPress={() => {navigation.navigate('Recuperacao')}} style={{ marginLeft:55,marginTop: 7, marginBottom:7, width:'38%' }} >
          <Text>Esqueceu a senha?</Text>
        </Pressable>
        <Pressable onPress={() => {navigation.navigate('Cadastro')}} style={{ marginTop: 7, marginBottom:7, width:'80%' }}>
          <Text>- Cadastrar</Text>
        </Pressable>
        </View>
      </View>
      <Pressable style={styles.button} onPress={() => { 
       login()
         }}
      >
        <Text style={styles.text}>Entrar</Text>
      </Pressable>
    </View>
  );
  
};




export default TelaLogin;
