import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";

export const CadastroProduto = ({ navigation, route }) => {

  const [sku, setSku] = useState("");
  const [nome, setNome] = useState("");
  const [valUnit, setValUnit] = useState(0);
  const [desc, setDesc] = useState("");
  const [valImport, setValImport] = useState(0);
  const [pontoPedido, setPedido] = useState(0);

  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#82BFF5",
      }}
    >
      <Text
        style={{
          marginBottom: 20,
          fontSize: 20,
          fontStyle: "normal",
          fontWeight: "700",
          color: "white",
        }}
      >
        {" "}
        Cadastro de Produto (1/4){" "}
      </Text>

      <View
        style={{
          backgroundColor: "white",
          borderRadius: 30,
          width: "90%",
          marginBottom: 10,
          marginTop: 10,
          flexDirection: "column",
          padding: 15,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            marginVertical: 10,
            fontSize: 20,
            fontStyle: "normal",
            fontWeight: "700",
            color: "black",
          }}
        >
          {" "}
          Informações Principais{" "}
        </Text>

        <TextInput
          style={styles.input}
          placeholder="SKU do produto"
          keyboardType="number-pad"
          placeholderTextColor="lightgray"
          onChangeText={(value) => setSku(value)}
        />

        <TextInput
          style={styles.input}
          placeholder="Nome do produto"
          keyboardType="default"
          placeholderTextColor="lightgray"
          onChangeText={(value) => setNome(value)}
        />

        <TextInput
          style={styles.input}
          placeholder="Valor unitário bruto do Produto"
          keyboardType="decimal-pad"
          placeholderTextColor="lightgray"
          onChangeText={(value) => setValUnit(value)}
        />

        <TextInput
          style={styles.input}
          placeholder="Descrição do Produto"
          keyboardType="default"
          placeholderTextColor="lightgray"
          onChangeText={(value) => setDesc(value)}
        />

        {/* <Text
          style={{
            fontSize: 15,
            marginBottom: 2,
            fontWeight: "500",
          }}
        >
          Ponto de Pedido
        </Text> */}

        <TextInput
          style={styles.input}
          placeholder="Ponto de pedido"
          keyboardType="number-pad"
          placeholderTextColor="lightgray"
          onChangeText={(value) => setPedido(value)}
        />

        {/* <View
          style={{
            flexDirection: "row",
            width: "90%",
            justifyContent: "space-between",
          }}
        ></View> */}
      </View>

      <Pressable style={styles.button}>
        <Text
          style={styles.text}
          onPress={() => {
            navigation.navigate("Impostos do Produto", {
              nome: nome,
              sku: sku,
              desc: desc,
              valImport: valImport,
              valUnit: valUnit,
              pontoPedido: pontoPedido
            });
          }}
        >
          Próximo
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    marginVertical: 10,
    alignSelf: "center",
    // marginLeft: 28,
    // marginRight: 10,
    paddingLeft: 10,
    width: "85%",
    flexDirection: "row",
    borderStyle: "solid",
    borderWidth: 2,
    backgroundColor: "#fff",
    fontSize: 15,
    height: 50,
    //color: "lightgray",
    borderRadius: 10,
  },

  button: {
    paddingHorizontal: 32,
    paddingVertical: 12,
    borderRadius: 30,
    elevation: 3,
    backgroundColor: "black",
  },
  text: {
    fontSize: 18,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
