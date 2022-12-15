import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { styles } from "../styles/cadastroStyles";
import api from "../config/conex";
import { Ionicons } from "@expo/vector-icons";

export const TelaCadastro = ({ navigation, route }) => {
  const id = route.params?.id;
  console.log(id);
  const [aluno, setAluno] = useState([]);
  const [hidePass, setHidePass] = useState(true);
  const [mode, setMode] = useState("eye");
  const [num, setNum] = useState("");
  const [pass, setPass] = useState("");
  const [conf, setConf] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  if (id > 0) {
    useEffect(() => {
      api
        .get("api/aluno/" + id)
        .then((response) => setAluno(response.data))
        .catch((err) => {
          console.error("Erro: " + err);
        });
    }, []);
  }

  async function cadastrar() {
    if (pass == conf) {
      api
        .post("api/aluno/save", {
          nome: name,
          codMatricula: num,
          email: email,
          senha: pass,
        })
        .then(function (response) {
          console.log(response);
          alert('Cadastro efetuado com sucesso!');
          navigation.navigate("Login");
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      alert("Senhas não coincidem!");
    }
  }

  async function atualizar() {
    if (pass == conf && pass !=  '') {
      api
        .put("api/aluno/" + id, {
          id: id,
          nome: name == "" ? aluno?.nome : name,
          codMatricula: num == "" ? aluno?.codMatricula : num,
          email: email == "" ? aluno.email : email,
          turma: aluno.turma,
          senha: pass,
        })
        .then(function (response) {
          console.log(response);
          alert('Alteração efetuada com sucesso!');
          navigation.navigate("Login");
        })
        .catch(function (error) {
          console.log("Erro: " + error);
        });
      
      }
      else{
      alert("Senhas não coincidem ou estão vazias!");
    }
  }

  return (
    <View
      style={{
        backgroundColor: "#82BFF5",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <View
        style={{
          
          height: "80%",
          borderRadius: 30,
          width: "80%",
          position: "absolute"
          
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
          Nome
        </Text>
        <TextInput
           
          maxLength={30}
          defaultValue={aluno?.nome}
          style={styles.input}
          placeholder="Digite seu nome"
          placeholderTextColor="lightgray"
          onChangeText={(value) => setName(value)}
        />
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
          defaultValue={aluno?.codMatricula}
          maxLength={8}
          style={styles.input}
          placeholder="Digite seu número de matrícula"
          placeholderTextColor="lightgray"
          onChangeText={(value) => setNum(value)}
        />
        {/* {console.log(num)} */}
        <Text
          style={{
            fontSize: 15,
            marginTop: 20,
            marginLeft: 30,
            marginBottom: 2,
          }}
        >
          E-mail
        </Text>
        <TextInput
          autoComplete="email"
          defaultValue={aluno.email}
          style={styles.input}
          placeholder="Digite seu e-mail"
          placeholderTextColor="lightgray"
          onChangeText={(value) => setEmail(value)}
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
        <Text
          style={{
            fontSize: 15,
            marginTop: 20,
            marginLeft: 30,
            marginBottom: 2,
          }}
        >
          Confirmar Senha
        </Text>
        <View style={styles.input}>
          <TextInput
            style={{ width: "80%", height: "100%", fontSize: 15 }}
            placeholder="Repita sua senha"
            placeholderTextColor="lightgray"
            secureTextEntry={hidePass}
            onChangeText={(value) => setConf(value)}
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
      </View>
      <Pressable
        style={styles.button}
        onPress={() => {
          if (id > 0) {
            atualizar();
          } else {
            cadastrar();
          }
        }}
      >
        <Text style={styles.text}>Cadastrar</Text>
      </Pressable>
    </View>
  );
};
