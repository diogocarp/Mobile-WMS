import React, { useState, useEffect, useRef } from "react";
import {Animated, View, StyleSheet, Text, Pressable } from "react-native";


import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";

const TelaInicial = ({navigation}) => {
  const [valor, setValor] = useState(50)
  const counter = useRef(new Animated.Value(0)).current;
  const countInterval = useRef(null);
  const [count, setCount] = useState(0);
  // EFFECT HOOK TO SETUP AND CLEAN INTERvAL COUNTER
  useEffect(() => {
    // SETUP INTERVAL COUNTER TO REFERENCED HOOK
    countInterval.current = setInterval(() => setCount((prev) => prev + 10), 1000);
    return () => {
      // CLEAR ON EXIT
      clearInterval(countInterval);
    };
  }, []);
  // EFFECT HOOK TO TRACK CHANGES IN PROGRESS
  useEffect(() => {
    // TRIGGER VIEW UPDATE
    load(valor)
  });
  // FUNCTION TO ANIMATE VIEW
  const load = (value) => {
    // UPDATE ANIMATABLE VIEW
    Animated.timing(counter, {
      toValue: value,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };
  const width = counter.interpolate({
    inputRange: [0, 100],
    outputRange: ["0%", "100%"],
    extrapolate: "clamp"
  })

  return (
    // root da tela
    <View style={{ flex: 1 }}>
      {/* container */}
      <View
        style={{
          backgroundColor: "#82BFF5",
          height: "100%",
          width: "100%",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* View da data */}
        <View style={styles.viewData}>
          {/* view do icon */}
          <View
            style={{
              width: "40%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Ionicons name="ios-calendar-outline" size={85} color="white" />
          </View>

          {/* data */}
          <View
            style={{
              width: "60%",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Text style={{ color: "white", fontSize: 26 }}>DOMINGO</Text>

            <Text style={{ color: "white", fontSize: 26 }}>19/10/2022</Text>
          </View>
        </View>
        {/* fim da view data */}

        {/* container que recebe as duas views do meio */}
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            height: "18%",
            marginTop: 20,
            justifyContent: "space-between",
          }}
        >
          {/* view-meio-esquerda */}
          <Pressable
            style={{
              backgroundColor: "#2A92CF",
              width: "35%",
              marginLeft: "10%",
              borderRadius: 25,
              alignItems: "center",
              justifyContent: "center",
            }} onPress={() => {navigation.navigate('Historico')}}
          >
            <MaterialCommunityIcons
              name="clipboard-list"
              size={100}
              color="white"
            />
          </Pressable>

          {/* view-meio-direita */}
          <Pressable
            style={{
              backgroundColor: "#2A92CF",
              width: "35%",
              marginRight: "10%",
              borderRadius: 25,
              alignItems: "center",
              justifyContent: "center",
            }} onPress={() => {navigation.navigate('Estoque')}}
          >
            <Fontisto name="database" size={80} color="white" />
          </Pressable>
        </View>
        {/* fim do container que recebe as duas views do meio */}

        {/* container que recebe as duas views de baixo */}
        <View style={styles.viewBaixo}>
          {/* view-baixo-esquerda */}
          <View style={{alignItems: "center", justifyContent: "center", width: '40%'}}>
            <Text style={{ color: "white", fontWeight: "700", fontSize: 22 }}>
              Estoque:
            </Text>
          </View>

          {/* view-baixo-direita */}
          <View
            style={styles.progressBar}
          >
            <Animated.View 
              style={{ ...StyleSheet.absoluteFill, backgroundColor: '#46FF33' ,marginRight: 10}}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewData: {
    height: "18%",
    backgroundColor: "#506266",
    width: "80%",
    marginTop: 50,
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  viewBaixo: {
    height: "18%",
    backgroundColor: "#506266",
    width: "80%",
    marginTop: 20,
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  progressBar: {
  width: '50%',
   height: 40,
   backgroundColor: '#fff',
   borderWidth: 3,
   borderRadius: 30,
   marginLeft: 3,
   borderColor: '#555',
   flexDirection:"row",
   overflow: "hidden"
  },
});

export default TelaInicial;
