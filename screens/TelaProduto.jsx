import { React, useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import api from "../config/conex";

import { Entypo } from "@expo/vector-icons";

const TelaProduto = ({ route }) => {
  const [produto, setProduto] = useState();
  const id = route.params?.id;
  console.log(id);

  useEffect(() => {
    api
      .get("api/produto/" + id)
      .then((response) => setProduto(response.data))
      .catch((err) => {
        console.error("Erro: " + err);
      });
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#82BFF5",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* container com info do produto */}
      <View
        style={{
          height: "80%",
          width: "80%",
          backgroundColor: "white",
          flexDirection: "column",
          borderRadius: 30,
        }}
      >
        {/* view de cima do container */}
        <View
          style={{
            height: "40%",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Entypo name="box" size={150} color="black" />
          <Text style={{ marginTop: 10, fontSize: 18, fontWeight: "600" }}>
            {produto?.nome}
          </Text>
          <Text style={styles.infoText}>Descrição: {produto?.descricao}</Text>
        </View>

        {/* view de baixo do container */}
        <View style={{ height: "60%", alignItems: "center", marginTop: 10 }}>
          {/* row's da view de baixo */}
          {/* row 1 do container */}
          <View style={styles.infoRow}>
            {/* lado esq do container */}
            <View style={styles.infoTextContainer}>
              <Text style={styles.infoText}>SKU: {produto?.sku}</Text>
            </View>

            {/* lado dir do container */}
            <View style={styles.infoTextContainer}>
              <Text style={styles.infoText}>
                Valor un.: {produto?.valorUnitario}
              </Text>
            </View>
          </View>

          {/* row 2 do container */}
          <View style={styles.infoRow}>

            {/* lado esq do container */}
            <View style={styles.infoTextContainer}>
              <Text style={styles.infoText}>
                Quantidade: {produto?.quantidade}
              </Text>
            </View>

            {/* lado dir do container */}
            <View style={styles.infoTextContainer}>
            <Text style={styles.infoText}>
              Importado: {produto?.importado ? "Sim" : "Não"}
            </Text>
            </View>
          </View>

          {/* row 3 do container */}
          <View style={styles.infoRow}>
            
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "80%",
    height: "80%",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
   infoRow: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 15,
  },
  infoTextContainer: {
    width: "45%",
    alignContent: "left",
  },
  infoText: {
    fontSize: 16,
    fontWeight: "500",
  },
 
});

export default TelaProduto;
