import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  TextInput,
  Button,
  Text,
  Pressable,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from '@expo/vector-icons'
import { AppRoutes } from "./app.routes";
import TelaInicial from "./TelaInicial";



const TelaLogin = () => {
    const [input, setInput] = useState('');
    const [hidePass, setHidePass] = useState(true);
    const [modo, setModo] = useState('eye')
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

      <View style={{width: '100%'}}>

        <Image source={require('./assets/5.png')} style={{height: 120, width: 120, left: "34%"}}/>

        <Image source={require('./assets/6.png')} style={{height: 50, width: 120, left: "37%"}}/>
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
        <Text style={{ fontSize: 20, marginTop: 10, marginLeft: 25 }}>
          Email
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu e-mail"
          placeholderTextColor="lightgray"
        />
        <Text style={{ fontSize: 20, marginTop: 10, marginLeft: 25 }}>
          Senha
        </Text>
        <View style={styles.input}>
        <TextInput
        style={{width:"80%", height:"100%", fontSize:15}}
          placeholder="Digite sua senha"
          placeholderTextColor="lightgray"
          secureTextEntry={hidePass}
          value={input}
          onChangeText={ (texto) => setInput(texto)}
          
        />
        <TouchableOpacity style={styles.icon} onPress={ () => setHidePass(!hidePass) 
         }>
        
            <Ionicons name={modo} 
            onPress={ 
            ()=> { 
            if(modo == 'eye'){
                setModo('md-eye-off')}
            else if(modo == 'md-eye-off'){
                setModo('eye')}
            }}
            
            color='black' size={25}/>
        </TouchableOpacity>
        </View>
        <Pressable style={{ textAlign: "center", marginTop: 15 }}>
          <Text ><b>Esqueceu a senha?</b></Text>
        </Pressable>
      </View>
      <Pressable style={styles.button} onPress={AppRoutes()}
      >
        <Text style={styles.text}>Entrar</Text>
      </Pressable>
    </View>
  );
};



const styles = StyleSheet.create({
  input: {
    marginTop: 5,
    marginLeft: 28,
    marginRight: 10,
    paddingLeft: 10,
    width: "82%",
    flexDirection:"row",
    borderStyle: "solid",
    borderWidth: 2,
    backgroundColor: "#fff",
    fontSize: 15,
    height: 50,

    //color: "lightgray",
    borderRadius: 10,
  },

  button: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 32,
    paddingVertical: 12,
    borderRadius: 30,
    elevation: 3,
    backgroundColor: "black",
    top: 20,
  },

  text: {

    fontSize: 18,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  icon:{

    width:"15%",
    height:50,
    justifyContent:'center',
    alignItems:'center',
    left:"70%"

  }
});

export default TelaLogin;
