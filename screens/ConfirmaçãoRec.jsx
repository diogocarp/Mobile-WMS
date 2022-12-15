import React, { useState, useEffect } from "react";
import { StyleSheet, View, TextInput, Pressable, Text } from "react-native";
import api from "../config/conex";

export function Confirmação({ navigation, route }) {
    const email = route.params?.alunoEmail
    
    const [code, setCode] = useState("")
    const [aluno, setAluno] = useState("")
    
    useEffect(() => {
        api
          .get(`api/aluno/buscarEmailAluno/${email}`)
          .then((response) => setAluno(response.data))
          .catch((err) => {
            console.error("Erro: " + err);
          });
      }, []);

    const codigo = aluno.codigo

    function comfirmacao() {
        if(code == codigo){
            recuperar()
        } else {
            alert("Codigo Incorreto!")
        }
        
    }
    function recuperar() {
    if ( api.put(`api/aluno/recuperarSenha/${aluno.id}`)
    .then()){
        navigation.navigate('Cadastro', {id: aluno.id})
    }
     else {
      alert("Email não cadastrado");
    }
  }

  return (
    <View style={styles.container}>
      <Text
        style={{
          marginTop: 20,
          marginBottom: 20,
          fontSize: 20,
          fontStyle: "normal",
          fontWeight: "700",
          color: "white",
        }}
      >
        Recuperação (2/2)
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Insira o código enviado para seu email"
        placeholderTextColor="lightgray"
        onChangeText={(value) => setCode(value)}
      />
      <Pressable style={styles.button} onPress={() => comfirmacao()} 
        >
        <Text style={styles.text}>Enviar</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#82BFF5",
  },
  input: {
    marginLeft: 10,
    marginRight: 10,
    paddingLeft: 10,
    width: "82%",
    flexDirection: "row",
    borderStyle: "solid",
    borderWidth: 2,
    backgroundColor: "#fff",
    fontSize: 15,
    height: 50,
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
});
