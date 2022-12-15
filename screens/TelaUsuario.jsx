import React, { useEffect, useState } from "react";
import { View, Image, Text, Pressable, StyleSheet } from "react-native";
import api from "../config/conex";

const TelaUsuario = ({ navigation, route }) => {
  const [user, setUser] = useState();
  const num = route.params?.userCod;
  console.log(num);

  useEffect(() => {
    api
      .get(`api/aluno/cod/${num}`)
      .then((response) => setUser(response.data))
      .catch((err) => {
        console.error("erro" + err);
      });
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text
          style={{
            marginBottom: 30,
            fontSize: 20,
            fontStyle: "normal",
            fontWeight: "700",
            color: "white",
          }}
        >
          Perfil
        </Text>

        <View
          style={{
            backgroundColor: "white",
            height: "80%",
            borderRadius: 30,
            width: "80%",
            alignItems: "center",
          }}
        >
          {/* conteudo a ser renderizado quando pegar api */}
          <View
            style={{
              height: "50%",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={
                user?.imagem == null
                  ? require("../assets/2.png")
                  : {
                      uri:user?.imagem 
                    }
              }
              style={{ width: 150, height: 150, borderRadius: 15 }}
            />

            <Text style={{ marginTop: 10, fontSize: 18, fontWeight: "600" }}>
              {user?.nome}
            </Text>
          </View>

          <View style={{ marginTop: 50, marginLeft: 20 }}>
            <Text style={{ marginTop: 10, fontSize: 16, fontWeight: "500" }}>
              {" "}
              N° de matrícula: {user?.codMatricula}
            </Text>

            <Text style={{ marginTop: 10, fontSize: 16, fontWeight: "500" }}>
              {" "}
              E-mail: {user?.email}
            </Text>
            <Text style={{ marginTop: 10, fontSize: 16, fontWeight: "500" }}>
              {" "}
              Turma: {user?.turma?.nome} (código: {user?.turma?.id})
            </Text>
          </View>
          <Pressable
            style={{
              width: 150,
              height: 30,
              backgroundColor: "blue",
              marginTop: 15,
              borderRadius: 10,
              justifyContent: "center",
            }}
            onPress={() => navigation.navigate("Cadastro", { id: user?.id })}
          >
            <Text
              style={{
                color: "white",
                fontWeight: "bold",
                alignSelf: "center",
                fontSize: 14,
              }}
            >
              Alterar Dados
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#82BFF5",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
});
export default TelaUsuario;
