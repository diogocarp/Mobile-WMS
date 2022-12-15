import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Pressable,
} from "react-native";
import { Ionicons, Fontisto } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import moment from "moment";
import "moment/locale/pt-br";
import api from "../config/conex";

const TelaInicial = ({ navigation, route }) => {
  console.log(route);
  const num = route.params?.userCod;
  const [user, setUser] = useState("");
  const [produto, setProduto] = useState([]);

  useEffect(() => {
    api
      .get("api/aluno/cod/"+num)
      .then((response) => setUser(response.data))
      .catch((err) => {
        console.error("erro" + err);
      });
    api
      .get("api/produto/list")
      .then((response) => setProduto(response.data))
      .catch((err) => {
        console.error("erro" + err);
      });
  }, []);

  const result = produto.length

  return (
    // root da tela
    <View style={{ flex: 1 }}>
      {/* container */}
      <View style={styles.container}>
        {/* view de saudação */}
        <View style={styles.greeting}>
          <Text
            style={{
              fontSize: 20,
              fontStyle: "normal",
              fontWeight: "700",
              color: "white",
            }}
          >
            Bem-vindo, {user?.nome}!
          </Text>
        </View>

        {/* View da data */}
        <View style={styles.viewData}>
          {/* view do icon */}
          <View style={styles.viewDataIconContainer}>
            <Ionicons name="ios-calendar-outline" size={85} color="white" />
          </View>

          {/* data */}
          <View style={styles.data}>
            <Text style={{ color: "white", fontSize: 20, marginRight: 10 }}>
              {moment(new Date()).locale("pt-br").format("LLLL")}
            </Text>
          </View>
        </View>
        {/* fim da view data */}

        {/* container que recebe as duas views do meio */}
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            height: "18%",
            marginTop: 20,
            justifyContent: "space-between",
          }}
        >
          {/* view-meio-esquerda */}
          <Pressable
            style={{
              backgroundColor: "#2A92CF",
              width: "35%",
              marginLeft: "10%",
              borderRadius: 25,
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() => {
              navigation.navigate("Histórico", { userId: user.id });
            }}
          >
            <MaterialCommunityIcons
              name="clipboard-list"
              size={100}
              color="white"
            />
          </Pressable>

          {/* view-meio-direita */}
          <Pressable
            style={{
              backgroundColor: "#2A92CF",
              width: "35%",
              marginRight: "10%",
              borderRadius: 25,
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() => {
              navigation.navigate("Estoque");
            }}
          >
            <Fontisto name="database" size={80} color="white" />
          </Pressable>
        </View>
        {/* fim do container que recebe as duas views do meio */}

        {/* container que recebe as duas views de baixo */}
        <View style={styles.viewBaixo}>
          {/* view-baixo-esquerda */}
          <View style={styles.progressBar}>
            <Text
              style={{
                color: "white",
                fontWeight: "700",
                fontSize: 26,
                marginBottom: 4,
                textAlign: "center",
              }}
            >
              Estoque: {result}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#82BFF5",
    height: "100%",
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
  },
  greeting: {
    width: "100%",
    marginTop: "5%",
    alignItems: "center",
    justifyContent: "center",
  },
  viewData: {
    height: "18%",
    backgroundColor: "#506266",
    width: "80%",
    marginTop: "5%",
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  viewDataIconContainer: {
    width: "40%",
    alignItems: "center",
    justifyContent: "center",
  },
  data: {
    width: "60%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  viewMeio: {
    width: "60%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  viewBaixo: {
    height: "18%",
    backgroundColor: "#506266",
    width: "80%",
    marginTop: 20,
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  progressBar: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    color: "white",
  },
});

export default TelaInicial;
