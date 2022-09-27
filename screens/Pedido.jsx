import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";



export default class Pedido extends Component {
  render() {
    return (
      <View style={styles.itemLista}>
        <View style={{ width: "70%" }}>
          <Text style={styles.text}>Código: {this.props.data.numPedido}</Text>
          <Text style={styles.text}>Data: {this.props.data.dataPedido} </Text>
        </View>

        <View
          style={{
            width: "30%",
            justifyContent: "center",
            alignItems: "center",
            
          }}
        >
          <FontAwesome name="check" size={46} color="#40ff00" />
          
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  itemLista:{ 
  marginLeft:20,
  
  marginTop: 20,
  backgroundColor: "white",
  width: "89.9%",
  borderRadius: 30,
  
  flexDirection: "row",
  },
  text:{
    marginTop: 20,
    marginLeft: 20,
    fontSize: 16,
    fontWeight: 500,
  }
  
});

