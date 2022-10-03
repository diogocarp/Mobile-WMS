import React, { useEffect } from "react";
import { Animated, View, StyleSheet, Text, Pressable, StatusBar } from "react-native";
import { Ionicons, Fontisto } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import moment from 'moment'
import 'moment/locale/pt-br'
import OneSignal from 'react-native-onesignal'





const Progress = ({step, steps, height}) => {

  const animatedValue = React.useRef(new Animated.Value(-1000)).current;
  const reactive = React.useRef(new Animated.Value(-1000)).current;
  const [width, setWidth] = React.useState(0);

  React.useEffect(() => {Animated.timing(animatedValue, {toValue:reactive,duration:300,
  useNativeDriver:true,
}).start();
},[])

React.useEffect(() => {

  reactive.setValue(-width + (width * step) / steps)

},[step, width])
  return(
    <>
    <Text style={{color:'white', fontSize:12, fontWeight:'900', marginBottom:8}}>
    {step}/{steps}
    </Text>
    <View 
    onLayout={(e) => {
      const newWidth = e.nativeEvent.layout.width
      setWidth(newWidth)
    }}
    style={{height, backgroundColor:'white',borderRadius:height,overflow:'hidden'
    }}>
     <Animated.View 
     style={{height,borderRadius:height,width:'100%', position:"absolute", backgroundColor:'lightgreen',left:0,top:0,transform:[
      {
        translateX:animatedValue
      }
     ]}}/>
    </View>
    </>
    )



}

const TelaInicial = ({navigation}) => {

  const [index,setIndex] = React.useState(0)
  React.useEffect(() => {
    const interval = setInterval(()=>{setIndex((index + 1) % (10 + 1))
    },1000)

    return () => {
      clearInterval(interval)
    }
  },[index])

  useEffect(() => {
    OneSignal.init('024a4a88-37af-4983-8130-69070a7afeda');

  }, []);


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
          <Text style={{ color: "white", fontSize: 20, marginRight:10 }}>{moment(new Date()).locale('pt-br').format('LLLL')}</Text>
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
          <View style={styles.progressBar}>
            <Text style={{ color: "white", fontWeight: "700", fontSize: 22,marginBottom:4 }}>
              Estoque:
            </Text>
            <StatusBar hidden/>
            <Progress step={index} steps={10} height={20}/>
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
    flex:1,
    justifyContent:'center',
    padding:20,
    color:'white'

  },
});

export default TelaInicial;
