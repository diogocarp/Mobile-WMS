import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import { RadioButton } from "react-native-paper";



const CadImpostos = ({ navigation, route }) => {
  const sku = route.params?.sku;
  const nome = route.params?.nome;
  const desc = route.params?.desc;
  const valUnit = route.params?.valUnit;
  const pontoPedido = route.params?.pontoPedido
  const [ipi, setIpi] = useState(0);
  const [pis, setPis] = useState(0);
  const [cofins, setCofins] = useState(0);
  const [icms, setIcms] = useState(0);
  const [valImport, setValImport] = useState(0);
  const [importado, setImportado] = useState(false);
  const [valLiquido, setValLiquido] = useState(0);

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
        Cadastro de Produto (2/4){" "}
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
          Impostos sobre o Produto{" "}
        </Text>

        <View
          style={{
            width: "55%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontWeight: "500", fontSize: 15 }}>
            O Produto é importado?
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            width: "45%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text>Sim</Text>
          <RadioButton
            value="Sim"
            status={importado == true ? "checked" : "unchecked"}
            onPress={() => {
              setImportado(true);
            }}
          />

          <Text>Não</Text>
          <RadioButton
            value="Não"
            status={importado == false ? "checked" : "unchecked"}
            onPress={() => {
              setImportado(false);
              setValImport("");
            }}
          />
        </View>

        <TextInput
          style={styles.input}
          editable={importado == true ? true : false}
          selectTextOnFocus={importado == true ? true : false}
          placeholder="Valor de Importação"
          keyboardType="decimal-pad"
          placeholderTextColor="lightgray"
          onChangeText={(value) => setValImport(value)}
        />

        <TextInput
          style={styles.input}
          placeholder="IPI (%)"
          keyboardType="decimal-pad"
          placeholderTextColor="lightgray"
          onChangeText={(value) => setIpi(value)}
        />

        <TextInput
          style={styles.input}
          placeholder="PIS (%)"
          keyboardType="decimal-pad"
          placeholderTextColor="lightgray"
          onChangeText={(value) => setPis(value)}
        />

        <TextInput
          style={styles.input}
          placeholder="COFINS (%)"
          keyboardType="decimal-pad"
          placeholderTextColor="lightgray"
          onChangeText={(value) => setCofins(value)}
        />

        <TextInput
          style={styles.input}
          placeholder="ICMS (%)"
          keyboardType="decimal-pad"
          placeholderTextColor="lightgray"
          onChangeText={(value) => setIcms(value)}
        />

        <TextInput
          style={styles.input}
          placeholder="Valor Líquido do Produto"
          keyboardType="decimal-pad"
          placeholderTextColor="lightgray"
          onChangeText={(value) => setValLiquido(value.replace("," , "."))}
        />
      </View>

      <Pressable style={styles.button}>
        <Text
          style={styles.text}
          onPress={(e) => {
            e.preventDefault();
            setValImport(0);

            navigation.navigate("Info. adicionais do Produto", {
              nome: nome,
              sku: sku,
              desc: desc,
              importado: importado,
              valImport: valImport == "" ? 0 : valImport,
              valUnit: valUnit,
              ipi: ipi,
              pis: pis,
              cofins: cofins,
              icms: icms,
              valLiquido: valLiquido,
              pontoPedido: pontoPedido,
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
    marginTop: 10,
    marginBottom: 5,
    paddingLeft: 10,
    width: "82%",
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

export default CadImpostos;
