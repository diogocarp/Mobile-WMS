import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TelaInicial from './TelaInicial';
import TelaLogin from './TelaLogin';
import { NavigationContainer } from '@react-navigation/native';
import TelaUsuario from './TelaUsuario';
import { Feather, Ionicons, AntDesign } from '@expo/vector-icons'
 
const {Navigator, Screen} = createBottomTabNavigator();

export function AppRoutes(){
    return(
        <NavigationContainer>
        <Navigator>
            <Screen name='Inicio' component={TelaInicial}
            options={{
                tabBarIcon: () => {
                    return <Feather name='home' size={25} color='black'/>
                }

            }}/>
            <Screen name='Login' component={TelaLogin}
            options={{
                tabBarIcon: () => {
                    return <AntDesign name='login' size={25} color='black'/>
                }

            }}
            
            />
            <Screen name='Perfil' component={TelaUsuario}
            options={{
                tabBarIcon: () => {
                    return <Ionicons name='person' size={25} color='black'/>
                }

            }}
            />
        </Navigator>
        </NavigationContainer>


    )
}