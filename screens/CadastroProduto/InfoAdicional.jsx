import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import api from "../../config/conex";
import { FontAwesome } from "@expo/vector-icons";
import { SwitchFornecedor } from "../../components/SwitchFornecedor";

const InfoAdicional = ({ navigation, route }) => {
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
  const valLiquido = route.params?.valLiquido;
  const pontoPedido = route.params?.pontoPedido;

  const [demandas, setDemandas] = useState([]);
  const [medidas, setMedidas] = useState([]);
  const [arrFornecedores, setArrFornecedores] = useState([]);
  const [arrNcm, setArrNcm] = useState([]);
  const [medida, setMedida] = useState();
  const [demanda, setDemanda] = useState("BAIXA");
  const [fornecedores, setFornecedores] = useState([]);
  const [ncm, setNcm] = useState(0);

  useEffect(() => {
    api
      .get("api/unidade/list")
      .then((response) => setMedidas(response.data))
      .catch((err) => {
        console.error("Erro: " + err);
      });
  }, []);

  useEffect(() => {
    api
      .get("/api/enumeracoes/demandas")
      .then((response) => setDemandas(response.data))
      .catch((err) => {
        console.error("Erro: " + err);
      });
  }, []);

  useEffect(() => {
    api
      .get("api/fornecedor/list")
      .then((response) => setArrFornecedores(response.data))
      .catch((err) => {
        console.error("Erro: " + err);
      });
  }, []);

  useEffect(() => {
    api
      .get("api/ncm/list")
      .then((response) => setArrNcm(response.data))
      .catch((err) => {
        console.error("Erro: " + err);
      });
  }, []);

  function toggle(id, f) {
    let index = fornecedores.findIndex((i) => i === id);
    let arrSelecteds = [...fornecedores];
    if (index !== -1) {
      arrSelecteds.splice(index, 1);
    } else {
      arrSelecteds.push(id);
    }
    setFornecedores(arrSelecteds);
  }

  return (
    <ScrollView
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#82BFF5",
        

      }}
    >
      <View 
       style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#82BFF5",
        justifyContent: "center",
        alignItems: "center",

      }}>
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
        Cadastro de Produto (3/4)
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
          justifyContent: "center",
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
          Informações Adicionais{" "}
        </Text>

        <Text
          style={{
            fontSize: 15,
            marginBottom: 2,
            fontWeight: "500",
          }}
        >
          NCM
        </Text>
        <View
          style={{
            height: 40,
            width: "60%",
            borderRadius: 20,
            alignSelf: "center",
            alignItems: "center",
          }}
        >
          {console.log("NCM: " + ncm)}

          <Picker
            style={{
              height: "100%",
              width: "95%",
              borderRadius: 20,
              fontSize: 18,
              paddingLeft: "5%",
            }}
            selectedValue={ncm}
            onValueChange={(item, itemIndex) => setNcm(item)}
          >
            <Picker.Item label="Selecione" value={0} />
            {arrNcm.map((item) => (
              <Picker.Item label={item?.ncm} key={item?.id} value={item.id} />
            ))}
          </Picker>
        </View>

        <Text
          style={{
            fontSize: 15,
            marginBottom: 2,
            fontWeight: "500",
          }}
        >
          Unidade de Medida
        </Text>
        <View
          style={{
            height: 40,
            width: "60%",
            borderRadius: 20,
            alignSelf: "center",
            alignItems: "center",
          }}
        >
          <Picker
            style={{
              height: "100%",
              width: "95%",
              borderRadius: 20,
              fontSize: 18,
              paddingLeft: "5%",
            }}
            selectedValue={medida}
            onValueChange={(itemValue, itemIndex) => {
              setMedida(itemValue);
            }}
            
          >
            <Picker.Item label="Selecione" value={0}/>
            {medidas.map((item) => (
              <Picker.Item
                key={item.id}
                label={item.nome}
                value={item.id}
              />
            ))}
          </Picker>
        </View>

        <Text
          style={{
            fontWeight: "500",
            fontSize: 15,
            alignSelf: "center",
            marginTop: 10,
          }}
        >
          Demanda
        </Text>

        <View
          style={{
            height: 40,
            width: "60%",
            borderRadius: 20,
            alignSelf: "center",
            alignItems: "center",
          }}
        >
          <Picker
            style={{
              height: "100%",
              width: "95%",
              borderRadius: 20,
              fontSize: 18,
              paddingLeft: "5%",
            }}
            selectedValue={demanda}
            onValueChange={(itemValue, itemIndex) => {
              setDemanda(itemValue);
            }}
          >
            {demandas.map((item) => (
              <Picker.Item key={item} value={item} label={item} />
            ))}
          </Picker>
        </View>

        <Text
          style={{
            fontWeight: "500",
            fontSize: 15,
            alignSelf: "center",
            marginTop: 10,
          }}
        >
          {" "}
          Fornecedores do Produto{" "}
        </Text>
        <View
          style={{
            width: "90%",
            flexDirection: "row",
            borderWidth: 2,
            borderRadius: 10,
            padding: 10,
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          {arrFornecedores.map((f) => (
            <View key={f.id} style={styles.optionContainer}>
              <View style={styles.optionMain}>
                <TouchableOpacity
                  style={styles.touchable}
                  onPress={() => toggle(f?.id, f)}
                >
                  {fornecedores.findIndex((i) => i === f.id) !== -1 ? (
                    <FontAwesome name="check" color="#3EBD93" size={16} />
                  ) : null}
                </TouchableOpacity>
                <Text style={styles.opText}>{f.nome}</Text>
              </View>

              <View style={styles.optionMain}>
                <SwitchFornecedor />
                <Text style={styles.opText}>O fornecedor é homologado?</Text>
              </View>
            </View>
          ))}
        </View>
      </View>

      <Pressable style={styles.button}>
        <Text
          style={styles.text}
          onPress={() => {
            if (ncm == 0) {
              alert("Selecione o NCM.");
            } else if (medida == 0) {
              alert("Selecione a medida.");
            } else {
              navigation.navigate("Confirmação do Produto", {
                nome: nome,
                desc: desc,
                medida: medida,
                pontoPedido: pontoPedido,
                valImport: valImport,
                valUnit: valUnit,
                valLiquido: valLiquido,
                demanda: demanda,
                ncm: ncm,
                sku: sku,
                fornecedores: fornecedores,
                importado: importado,
                ipi: ipi,
                pis: pis,
                cofins: cofins,
                icms: icms,
              });
            }
          }}
        >
          Próximo
        </Text>
      </Pressable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 5,
    alignSelf: "center",
    paddingLeft: 10,
    width: "85%",
    flexDirection: "row",
    borderStyle: "solid",
    borderWidth: 2,
    backgroundColor: "#fff",
    fontSize: 15,
    height: 50,
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
  optionContainer: {
    flexDirection: "column",
    alignItems: "center",
    alignSelf: "center",
    marginBottom: 5,
    borderWidth: 2,
    borderRadius: 8,
    padding: 10,
    width:'95%'
    
  },
  optionMain: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    marginBottom: 5,
    
  },
  touchable: {
    height: 20,
    width: 20,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "3EBD93",
    borderWidth: 2,
  },
  opText: {
    color: "#555",
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 2,
    marginRight: 2,
  },
});

export default InfoAdicional;
