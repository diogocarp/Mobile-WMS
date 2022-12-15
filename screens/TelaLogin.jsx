import React, { useState, useEffect } from "react";
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
import { Ionicons } from "@expo/vector-icons";
import { styles } from "../styles/loginStyle";
import api from "../config/conex";

const TelaLogin = ({ navigation }) => {
  const [hidePass, setHidePass] = useState(true);
  const [mode, setMode] = useState("eye");
  const [pass, setPass] = useState("");
  const [num, setNum] = useState("");


  async function login() {
   await api
   .post("api/aluno/login", {
     codMatricula: num,
     senha: pass,
   })
   .then(function (response) {
   console.log(response);
   navigation.navigate("WMS - Mobile", { userCod: num, senha: pass });
   })
   .catch(function (error) {
   console.log(error);
   alert("Usuario ou senha não existem");
   });
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
      <View style={{ width: "100%", alignItems: "center", top:100, position:'absolute'}}> 
        <Image
          source={require("../assets/5.png")}
          style={{ height: 140, width: 140}}
        />

        <Image
          source={require("../assets/6.png")}
          style={{ height: 50, width: 140,  }}
        />
      </View>
      <View
        style={{
          top:350,
          backgroundColor: "white",
          height: "30%",
          borderRadius: 30,
          width: "85%",
          position: "absolute",
          

          
        }}
      >
        <Text
          style={{
            fontSize: 15,
            marginTop: 20,
            marginLeft: 30,
            marginBottom: 2,
          }}
        >
          Número de Matrícula
        </Text>
        <TextInput
          maxLength={8}
          style={styles.input}
          placeholder="Digite seu número de matrícula"
          placeholderTextColor="lightgray"
          onChangeText={(value) => setNum(value)}
        />
        <Text
          style={{
            fontSize: 15,
            marginTop: 20,
            marginLeft: 30,
            marginBottom: 2,
          }}
        >
          Senha
        </Text>
        <View style={styles.input}>
          <TextInput
            style={{ width: "80%", height: "100%", fontSize: 15 }}
            placeholder="Digite sua senha"
            placeholderTextColor="lightgray"
            secureTextEntry={hidePass}
            onChangeText={(value) => setPass(value)}
          />
          <TouchableOpacity style={styles.icon}>
            <Ionicons
              name={mode}
              onPress={() => {
                if (mode == "eye") {
                  setMode("md-eye-off");
                  setHidePass(!hidePass);
                } else if (mode == "md-eye-off") {
                  setMode("eye");
                  setHidePass(!hidePass);
                }
              }}
              color="black"
              size={25}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            display: "flex",
            width: "70%",
            marginLeft: 40,
          }}
        >
          <Pressable
            onPress={() => {
              navigation.navigate("Recuperacao");
            }}
            style={{
           
              marginTop: 7,
              marginBottom: 7,
              width: "60%",
            }}
          >
            <Text style={{textDecorationLine:"underline"}} >Esqueceu a senha?</Text>
          </Pressable>
          <Text style={{marginRight:10}}>-</Text>
          <Pressable
            onPress={() => {
              navigation.navigate("Cadastro");
            }}
            style={{ marginTop: 7, marginBottom: 7, width: "50%" }}
          >
            <Text style={{textDecorationLine:"underline"}}>Cadastrar</Text>
          </Pressable>
        </View>
      </View>
      <Pressable
        style={styles.button}
        onPress={() => {
          login();
        }}
      >
        <Text style={styles.text}>Entrar</Text>
      </Pressable>
    </View>
  );
};
export default TelaLogin;
