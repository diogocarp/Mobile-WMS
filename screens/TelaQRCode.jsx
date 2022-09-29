import { BarCodeScanner } from "expo-barcode-scanner";
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Button, Linking } from 'react-native'



export const TelaQRCode = () => {
  const [permission, setPermission] = useState(null)
  const [scanned, setScanned] = useState(false)

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setPermission(status === 'granted')

    })();
  }, [])

  const handleBarCodeScanned = ({ type, data }) => {

    setScanned(true)
    alert(`Código de Barra com tipo ${type} e dados ${Linking.openURL(`${data}`)} que foi escaneado`)

  }


  if (permission === null){
    return <Text style={styles.text}>Requerendo permissão de câmera</Text>


  }
  if(permission === false){
    return <Text style={styles.text}> Sem acesso a câmera</Text>
  }

  return(
  <View style={styles.container}>
    <BarCodeScanner onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
    style = {StyleSheet.absoluteFillObject}/>
                        
    {scanned && <Button color='black'  title="Aperte para escanear novamente" onPress={() => setScanned(false)}/>}
    
  </View>
  )

}

const styles = StyleSheet.create({

  container:{
    flex:1,
    flexDirection:'column',
    justifyContent:'center'


  },

  text:{
    textAlign:"center",
    marginTop:'50%',
    fontSize:20


  }

})