import { BarCodeScanner } from "expo-barcode-scanner";
import moment from "moment";
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Button, Linking } from "react-native";
import api from "../config/conex";

export const TelaQRCode = ({ route }) => {
  const [permission, setPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [id, setId] = useState();
  const num = route.params?.userCod;

  useEffect(() => {
    api
      .get(`api/aluno/cod/${num}`)
      .then((response) => setId(response.data.id))
      .catch((err) => {
        console.error("erro" + err);
      });
  }, []);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    const dataFormat = data.substring(9, 13);
    const dataHora = moment(new Date()).format("DD-MM-yyyy HH:mm");
    setScanned(true);
    alert(
      `Código de Barra com tipo ${type} e dados ${data} e ${id} do aluno, que foi escaneado`
    );

    api
      .post("api/historico/save", {
        codigo: dataFormat,
        data: dataHora,
        idAluno: id,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  if (permission === null) {
    return <Text style={styles.text}>Requerendo permissão de câmera</Text>;
  }

  if (permission === false) {
    return <Text style={styles.text}> Sem acesso a câmera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />

      {scanned && (
        <Button
          color="black"
          title="Aperte para escanear novamente"
          onPress={() => setScanned(false)}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },

  text: {
    textAlign: "center",
    marginTop: "50%",
    fontSize: 20,
  },
});
