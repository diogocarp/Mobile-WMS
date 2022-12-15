import React, { useEffect } from "react";

import { NavigationContainer } from "@react-navigation/native";

import TelaInicial from "./screens/TelaInicial";
import TelaLogin from "./screens/TelaLogin";
import TelaUsuario from "./screens/TelaUsuario";
import TelaHistorico from "./screens/Historico/TelaHistorico";
import { TelaCadastro } from "./screens/TelaCadastro";
import { TelaRecuperacao } from "./screens/TelaRecuperacao";
import { TelaQRCode } from "./screens/TelaQRCode";
import TelaEstoque from "./screens/Estoque/TelaEstoque";
import TelaProduto from "./screens/Estoque/TelaProduto";
import TelaPedido from "./screens/Historico/TelaPedido";
import { CadastroProduto } from "./screens/CadastroProduto/CadastroProduto";
import CadImpostos from "./screens/CadastroProduto/CadImpostos";
import InfoAdicional from "./screens/CadastroProduto/InfoAdicional";
import Confirmacao from "./screens/CadastroProduto/Confirmacao";

import { Entypo, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5, FontAwesome } from "@expo/vector-icons";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Confirmação } from "./screens/ConfirmaçãoRec";

const Stack = createNativeStackNavigator();
export default function AppLogin() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={TelaLogin} />
        <Stack.Screen name="WMS - Mobile" component={MyTabs} />
        <Stack.Screen name="Cadastro" component={TelaCadastro} />
        <Stack.Screen name="Recuperacao" component={TelaRecuperacao} />
        <Stack.Screen name="Histórico" component={TelaHistorico} />
        <Stack.Screen name="Estoque" component={TelaEstoque} />
        <Stack.Screen name="Impostos do Produto" component={CadImpostos}/>
        <Stack.Screen
          name="Info. adicionais do Produto"
          component={InfoAdicional}
        />
        <Stack.Screen name="Confirmação do Produto" component={Confirmacao}/>
        <Stack.Screen name="Produto" component={TelaProduto} />
        <Stack.Screen name="Pedido" component={TelaPedido} />
        <Stack.Screen name="Confirmação Recuperação" component={Confirmação} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Tab = createMaterialBottomTabNavigator();
export function MyTabs({ route }) {
  const num = route.params?.userCod;
  const id = route.params?.userId;
  

  return (
    <Tab.Navigator
      
      barStyle={{ backgroundColor: "white" }}
      backBehavior="history"
      shifting={true}
      
      
    >
      <Tab.Screen
        name="Início"
        component={TelaInicial}
        initialParams={{ userCod: num }}
        
        options={{
          tabBarIcon: () => {
            return <Entypo name="home" size={25} />;
          },
          

          
        }}
      />

      <Tab.Screen
        name="QR Code"
        component={TelaQRCode}
        initialParams={{ userCod: num, userId: id }}
        options={{
          tabBarIcon: () => {
            return (
              <MaterialIcons name="qr-code-scanner" size={25}/>
            );
          },
        }}
      />

      <Tab.Screen
        name="Cadastro Produto"
        component={CadastroProduto}
        initialParams={{ userCod: num }}
        options={{
          tabBarIcon: () => {
            return <FontAwesome name="plus" size={25} />;
          },
        }}
      />

      <Tab.Screen
        name="Perfil"
        component={TelaUsuario}
        initialParams={{ userCod: num }}
        options={{
          tabBarIcon: () => {
            return <Ionicons name="person" size={25} />;
          },
        }}
      />
      
         
      
    </Tab.Navigator>
  );
}
