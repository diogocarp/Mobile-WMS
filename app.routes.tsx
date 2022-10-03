import React, {useEffect} from 'react';
import TelaInicial from './screens/TelaInicial';
import TelaLogin from './screens/TelaLogin';
import { NavigationContainer } from '@react-navigation/native';
import TelaUsuario from './screens/TelaUsuario';
import { Entypo, Ionicons, MaterialIcons } from '@expo/vector-icons'
import { FontAwesome5, FontAwesome } from '@expo/vector-icons';
import TelaHistorico from './screens/TelaHistorico';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
    createMaterialBottomTabNavigator
} from '@react-navigation/material-bottom-tabs';
import { TelaCadastro } from './screens/TelaCadastro';
import { TelaRecuperacao } from './screens/TelaRecuperacao';
import { TelaQRCode } from './screens/TelaQRCode';
import { TelaConfig } from './screens/TelaConfig';
import TelaEstoque from './screens/TelaEstoque';
import TelaProduto from './screens/TelaProduto';



const Stack = createNativeStackNavigator()
export default function AppLogin() {
    
    
    return (
        <NavigationContainer>
            <Stack.Navigator >
                <Stack.Screen name="Login" component={TelaLogin} />
                <Stack.Screen name="WMS - Mobile" component={MyTabs} />
                <Stack.Screen name="Cadastro" component={TelaCadastro} />
                <Stack.Screen name="Recuperacao" component={TelaRecuperacao} />
                <Stack.Screen name="Historico" component={TelaHistorico} />
                <Stack.Screen name="Estoque" component={TelaEstoque} />
                <Stack.Screen name="Produto" component={TelaProduto} />
            </Stack.Navigator>
        </NavigationContainer>
    )

}

const Tab = createMaterialBottomTabNavigator();
export function MyTabs() {
    return (

        <Tab.Navigator
            
            shifting={true}
            labeled={false}
            barStyle={{ backgroundColor: 'white' }}>
            <Tab.Screen
                name='Inicio'
                component={TelaInicial}

                options={{
                    tabBarIcon: () => {
                        return <Entypo name='home' size={25} />

                    }


                }} />

            <Tab.Screen name='QRCode' component={TelaQRCode}
                options={{
                    tabBarIcon: () => {
                        return <MaterialIcons name='qr-code-scanner' size={25} color='black' />
                    }
                }}

            />


            <Tab.Screen name='Perfil' component={TelaUsuario}
                options={{
                    tabBarIcon: () => {
                        return <Ionicons name='person' size={25} color='black' />
                    }
                }}

            />
            <Tab.Screen name='Config' component={TelaConfig}
                options={{
                    tabBarIcon: () => {
                        return <FontAwesome name='gear' size={25} color='black' />
                    }
                }}

            />


        </Tab.Navigator>
    )
} 