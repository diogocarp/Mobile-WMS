import {React} from "react";
import { Text, View } from "react-native";
import Lista from "./Lista";

const TelaHistorico = () => {
  return (

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
    
  );
};

export default TelaHistorico;
