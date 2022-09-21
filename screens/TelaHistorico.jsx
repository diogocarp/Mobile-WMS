import React from "react";
import { Text, View } from "react-native";


import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 
import { Foundation } from '@expo/vector-icons'; 

const TelaHistorico = () => {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          backgroundColor: "#82BFF5",
          height: "100%",
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

        {/* começo da lista */}
        {/* primeira div */}
        <View
          style={{
            marginTop: 20,
            backgroundColor: "white",
            height: "15%",
            borderRadius: 30,
            width: "90%",
            flexDirection: "row",
          }}
        >

          <View style={{
            width: '70%'
          }}>  
          <Text
            style={{
              marginTop: 20,
              marginLeft: 20,
              fontSize: 16,
              fontWeight: 500,
            }}
          >
            Código: 123456
          </Text>
          <Text style={{
            
            marginTop: 10,
            marginLeft: 20,
            fontSize: 16,
            fontWeight: 500,
            }}>Data: 26/08/2022</Text>
          </View>  
            


          <View style={{width: '30%', justifyContent: "center", alignItems: "center"}}>
          <FontAwesome name="check" size={46} color="#40ff00" />
          </View>
        </View>
        {/* fim da primeira div */}

        {/* começo da segunda div */}
        <View
          style={{
            marginTop: 20,
            backgroundColor: "white",
            height: "15%",
            borderRadius: 30,
            width: "90%",
            flexDirection: "row",
          }}
        >

          <View style={{
            width: '70%'
          }}>  
          <Text
            style={{
              marginTop: 20,
              marginLeft: 20,
              fontSize: 16,
              fontWeight: 500,
            }}
          >
            Código: 123456
          </Text>
          <Text style={{
              marginTop: 10,
              marginLeft: 20,
              fontSize: 16,
              fontWeight: 500,
            }}>Data: 26/08/2022</Text>
          </View>  

          <View style={{width: '30%', justifyContent: "center", alignItems: "center"}}>
          <Foundation name="x" size={46} color="red" />
          </View>
        </View>
        {/* fim da segunda div */}


        {/* começo da terceira div */}
        <View
          style={{
            marginTop: 20,
            backgroundColor: "white",
            height: "15%",
            borderRadius: 30,
            width: "90%",
            flexDirection: "row",
          }}
        >

          <View style={{
            width: '70%'
          }}>  
          <Text
            style={{
              marginTop: 20,
              marginLeft: 20,
              fontSize: 16,
              fontWeight: 500,
            }}
          >
            Código: 123456
          </Text>
          <Text style={{
              marginTop: 10,
              marginLeft: 20,
              fontSize: 16,
              fontWeight: 500,
            }}>Data: 26/08/2022</Text>
          </View>  

          <View style={{width: '30%', justifyContent: "center", alignItems: "center"}}>
          <Entypo name="dots-three-horizontal" size={46} color="black" />
          </View>
        </View>
        {/* fim da terceira div */}

      </View>
    </View>
  );
};

export default TelaHistorico;
