import { React, useState, useEffect } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import api from "../../config/conex";

const TelaProduto = ({ route }) => {
  const [produto, setProduto] = useState();
  const codigo = route.params?.codigo;

  useEffect(() => {
    api
      .get(`api/produto/${codigo}`)
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
      <View
        style={{
          height: "80%",
          width: "80%",
          backgroundColor: "white",
          flexDirection: "column",
          borderRadius: 30,
        }}
      >
        <View
          style={{
            height: "40%",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={
              produto?.imagem == null
                ? require("../../assets/open-box.png")
                : {
                    uri:produto?.imagem
                      
                  }
            }
            style={{ width: 130, height: 130, borderRadius: 15 }}
          />
          <Text style={{ marginTop: 10, fontSize: 18, fontWeight: "600" }}>
            {produto?.nome}
          </Text>
          <Text style={styles.infoText}>Descrição: {produto?.descricao}</Text>
        </View>

        <View style={{ height: "60%", alignItems: "center", marginTop: 10 }}>
          <View style={styles.infoRow}>
            <Text style={styles.infoText}>SKU: {produto?.sku}</Text>
          </View>

          <Text style={styles.infoText}>
            Valor un.: R${produto?.valorUnitario}
          </Text>
        </View>

        <View style={styles.infoRow}></View>
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
