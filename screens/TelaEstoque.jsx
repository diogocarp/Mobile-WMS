import { React, useState, useEffect } from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import api from "../config/conex";


const TelaEstoque = ({navigation}) => {
  const [produto, setProduto] = useState([]);
  const [id, setId] = useState(0)

  useEffect(() => {
    api
      .get("api/produto/")
      .then((response) => setProduto(response.data))
      .catch((err) => {
        console.error("erro" + err);
      });
  }, []);

  return (
    <ScrollView style={{ backgroundColor: "#82BFF5" }}>
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
          {console.log(produto)}
          {produto.map((p) => (
            <Pressable key={p.codProduto} style={styles.itemLista} onPress={() => navigation.navigate('Produto', {id: p.codProduto})}>
              <View style={{ width: '70%', flexDirection: "column"}}>
                <Text style={styles.text}>Código: {p.codProduto}</Text>
                <Text style={styles.text}>Produto: {p.nome}</Text>
                <Text style={styles.text}>Quantidade: {p.quantidade}</Text>
                
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
    fontWeight: 500,
  },
  lista: {},
});

export default TelaEstoque
