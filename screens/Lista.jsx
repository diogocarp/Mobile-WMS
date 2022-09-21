import {React, Component, useState} from "react"
import { Text, View, StyleSheet, FlatList, Dimensions } from "react-native"
import api from "../config/conex";
import Pedido from "./Pedido";



export default class Lista extends Component{

  constructor(props){
    super(props)

    this.state={
      pedidos: []
    }
  }

  // ciclo de vida do app, renderiza tudo dentro da api toda vez que abre o app

  async componentDidMount(){
    const resp = await api.get("api/pedido") 
    this.setState({
      pedidos: resp.data
    })
  }



    render(){
        return(
           <View style={{}}>
            <View>
              <FlatList
                style={{height: '100%', backgroundColor: "#82BFF5", flexDirection: "column"}}
                data={this.state.pedidos}
                keyExtractor={item => item.numPedido.toString()}
                renderItem={ ({item}) => <Pedido data={item}></Pedido>}
              />
             </View> 
           </View>
        )
    }

    
}



