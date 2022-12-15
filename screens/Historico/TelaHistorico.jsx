import { React, Component, useState, useEffect } from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import api from "../../config/conex";
import Spinner from 'react-native-loading-spinner-overlay';

import { FontAwesome } from "@expo/vector-icons";

const TelaHistorico = ({ navigation, route }) => {
  const [hist, setHist] = useState([]);
  const [spinner, setSpinner] = useState(true);

  console.log(route);

  useEffect(() => {
    setInterval(() => {setSpinner(false)},3000)
    const id = route.params?.userId;
    api
      .get(`api/historico/list/${id}`)
      .then((res) => setHist(res.data))
      .catch((err) => {
        console.error("erro" + err);
      });
  }, []);

  return (
    <ScrollView style={{ backgroundColor: "#82BFF5" }}>
      <Spinner
      visible={spinner}
      textStyle={styles.spinnerTextStyle}
    />
      <View
        style={{
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 15,
        }}
      >
        <Text style={{ color: "white", fontSize: 18, fontWeight: "700" }}>
          {" "}
          Histórico{" "}
        </Text>
      </View>

      <View
        style={{
          backgroundColor: "#82BFF5",
          height: "auto",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <View
          style={{
            alignItems: "center",
            backgroundColor: "#82BFF5",
          }}
        >
          {console.log(hist)}
          {hist.map((hist) => (
            <Pressable
              key={hist.codigo}
              style={styles.itemLista}
              onPress={() =>
                navigation.navigate("Pedido", { codigo: hist.codigo })
              }
            >
              <View style={{ width: "60%", flexDirection: "column" }}>
                <Text style={styles.text}>Cód. do Pedido: {hist.codigo}</Text>
                <Text style={styles.text}>Data: {hist.data}</Text>
              </View>
              <View
                style={{
                  width: "40%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <FontAwesome name="check" size={66} color="#40ff00" />
              </View>
            </Pressable>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  itemLista: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "white",
    width: "90%",
    borderRadius: 30,

    flexDirection: "row",
  },
  text: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 20,
    fontSize: 16,
    fontWeight: "500",
  },
  lista: {},
});

export default TelaHistorico;
