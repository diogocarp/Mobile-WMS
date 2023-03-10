import React, { useState } from "react";
import { StyleSheet, View, TextInput, Pressable, Text } from "react-native";
import api from "../config/conex";
import Spinner from 'react-native-loading-spinner-overlay';

export function TelaRecuperacao({ navigation }) {
  const [email, setEmail] = useState("");
  const [spinner, setSpinner] = useState(false);

  const time = () => setInterval(() => {setSpinner(false)},5000)
  
  const user = {
    email: email
  }

   function sendEmail() {
      api.post(`api/aluno/buscarEmail/${email}`, user)
    .then((response) => {
      response == 500 ? alert("Email não está cadastrado") : navigation.navigate('Confirmação Recuperação', 
    { alunoEmail: email }
    )})

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
        Recuperação (1/2)
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Insira seu e-mail para recuperação"
        placeholderTextColor="lightgray"
        onChangeText={(value) => setEmail(value)}
      />
      <Spinner
      visible={spinner}
      textStyle={styles.spinnerTextStyle}
    />
      <Pressable style={styles.button} onPress={() => {sendEmail(),setSpinner(true), time()}}>
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
  spinnerTextStyle: {
    color: '#000'
  },
});
