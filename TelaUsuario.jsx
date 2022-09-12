import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import Header from "./components/header";



const TelaUsuario = () => {
    return(
        <View style={{flex:1}}>
        <View style={{backgroundColor: "#82BFF5",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",}}>

            <View style={{
                marginTop: 30,
                backgroundColor: "white",
                height: "70%",
                borderRadius: 30,
                width: "80%",}}
                >
                    <View style={{height: '50%', width: '100%', justifyContent: "center", alignItems: "center"}}>
                        <Image 
                        source={require('./assets/2.png')}
                        style={{width: 140, height: 150, marginTop: 40}}
                        />
                        <Text style={{marginTop: 10, fontSize: 18, fontWeight: "600"}}>(Nome do usuário)</Text>
                    </View>

                    <View style={{marginTop: 50, marginLeft: 20}}>
                        <Text style={{marginTop: 10, fontSize: 16, fontWeight: "400"}}> N° de matrícula:</Text>

                        <Text style={{marginTop: 10, fontSize: 16, fontWeight: "400"}}> E-mail:</Text>
                    </View>


            </View>



        </View>
    </View>
    )
}

export default TelaUsuario