import {React, Component, useState} from "react";
import { Text, View, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import '../styles/style.css'


import Lista from "./Lista";

const TelaHistorico = () => {

  const lista = useState('')

  return (
<ScrollView>
    <View style={{flex: 1, backgroundColor: "#82BFF5"}}>
      <View 
        style={{
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Text
          style={{
            marginTop: 20,
            fontSize: 20,
            fontStyle: "normal",
            fontWeight: "700",
            color: "white",
          }}
        >
          Histórico
        </Text>
      </View>

      <View style={{
          height: '80%',
          width: '100%'
      }}>      
    <Lista/>
    </View>
    </View>  
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  text:{
    marginTop: 20,
    marginLeft: 20,
    fontSize: 16,
    fontWeight: 500,
  }
});

export default TelaHistorico;
