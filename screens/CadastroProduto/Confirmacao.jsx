import { React, useEffect, useState } from "react";
import { View, TextInput, StyleSheet, Pressable, Text } from "react-native";
import api from "../../config/conex";


const Confirmacao = ({ route }) => {
  const nome = route.params?.nome;
  const sku = route.params?.sku;
  const importado = route.params?.importado;
  const valImport = route.params?.valImport;
  const valUnit = route.params?.valUnit;
  const desc = route.params?.desc;
  const ipi = route.params?.ipi;
  const pis = route.params?.pis;
  const cofins = route.params?.cofins;
  const icms = route.params?.icms;
  const fornecedores = route.params?.fornecedores;
  const demanda = route.params?.demanda;
  const pontoPedido = route.params?.pontoPedido;
  const valorLiquido = route.params?.valLiquido;
  const ncm = route.params?.ncm;
  const medida = route.params?.medida;
  console.log(medida)
const [unidade, setUnidade] = useState()
const [ncm2, setNcm2] = useState()
const [ncm3, setNcm3] = useState()
useEffect(() => {
  api
    .get(`api/unidade/${medida}`)
    .then((response) => setUnidade(response.data.nome))
    .catch((err) => {
      console.error("Erro: " + err);
    });
}, []);

useEffect(() => {
  api
    .get(`api/ncm/${ncm}`)
    .then((response) => {setNcm2(response.data), setNcm3(response.data.ncm)})
    .catch((err) => {
      console.error("Erro: " + err);
    });
}, []);
 
  console.log(route);
  console.log(medida);
  
  
  const produto = {
    nome: nome,
    descricao: desc,
    pontoPedido: pontoPedido,
    valorImportacao: valImport,
    valorUnitario: valUnit,
    demanda: demanda,
    medida: {id: medida}, 

    sku: sku,
    fornecedores: fornecedores.map(f => (

      {

          "fornecedor": {

              "id": f

          }

      }

  )),
    ncm:ncm2,
    importado: importado,
    ipi: ipi,
    pis: pis,
    cofins: cofins,
    icms: icms,
    imagem: null,
    valorLiquido: valorLiquido,
  };

  console.log(produto);

  const fazPost = async () => {
    await api
      .post("api/produto/save", produto)
      .then((response) => {
        alert("Produto cadastrado com sucesso");
      })
      .catch((err) => {
        console.error("ERRO: " + err);
      });
  };

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
          marginBottom: 10,
          fontSize: 20,
          fontStyle: "normal",
          fontWeight: "700",
          color: "white",
          maxHeight: "60%",
        }}
      >
        Cadastro de Produto (4/4)
      </Text>

      <View
        style={{
          backgroundColor: "white",
          borderRadius: 30,
          maxWidth: '95%',
          width: '90%',
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
          Confirmação{" "}
        </Text>

        <View style={{ width: "100%", flexDirection: "row" }}>
          {/* view esquerda */}
          <View
            style={{
              width: "55%",
              flexDirection: "column",
              paddingRight: 5,
              borderRightColor: 'black', borderRightWidth: 2
            }}
          >
            <Text style={styles.dataText}>Nome: {nome}</Text>
            <Text style={styles.dataText}>SKU: {sku}</Text>
            <Text style={styles.dataText}>Descrição: {desc}</Text>
            <Text style={styles.dataText}>Val. Unitário: {valUnit}</Text>
            <Text style={styles.dataText}>Val. Importação: {valImport}</Text>
            <Text style={styles.dataText}>
              Importação? {importado == true ? "Sim" : "Não"}
            </Text>
            <Text style={styles.dataText}>Demanda: {demanda}</Text>
          </View>

          {/* view direita */}
          <View
            style={{
              width: "45%",
              flexDirection: "column",
              paddingLeft: 4
            }}
          >
            <Text style={styles.dataText}>NCM: {ncm3}</Text>
            <Text style={styles.dataText}>IPI: {ipi}</Text>
            <Text style={styles.dataText}>PIS: {pis}</Text>
            <Text style={styles.dataText}>Cofins: {cofins}</Text>
            <Text style={styles.dataText}>ICMS: {icms}</Text>
            <Text style={styles.dataText}>ID dos Fornecedores: {fornecedores + ","}</Text>
            <Text style={styles.dataText}>Unidade de Medida: {unidade}</Text>
          </View>
        </View>
      </View>
      <Pressable style={styles.button}>
        <Text
          style={styles.text}
          onPress={() => {
            console.log(produto);
            fazPost(produto);
          }}
        >
          Cadastrar Produto
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
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
  dataText: {
    fontSize: 15,
    lineHeight: 20,
    fontWeight: "500",
    letterSpacing: 0.25,
  },
});

export default Confirmacao;
