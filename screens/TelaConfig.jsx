import React, { useState} from "react";
import { View, StyleSheet, Text, Switch, Pressable } from "react-native";




export const TelaConfig = ({navigation}) => {

    const [checked, setChecked] = useState(false)
    const [checked2, setChecked2] = useState(false)
    const [checked3, setChecked3] = useState(false)


    return(
        <View style={{flex:1}}>
        <View style={{backgroundColor: "#82BFF5",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",}}>

            <Text
          style={{
            marginTop: 15,
            fontSize: 20,
            fontStyle: "normal",
            fontWeight: "700",
            color: "white",
          }}
        >
          Configurações
        </Text>
            <View style={{
                marginTop: 30,
                backgroundColor: "white",
                height: "80%",
                borderRadius: 30,
                width: "80%"}}
                >

                    <View style={styles.section}>
                        <View style={{width: '70%'}}>
                            <Text style={{fontSize: 18, fontWeight: "700", paddingLeft: 16}}>Modo Vibração</Text>
                        </View>

                        <View style={{width: '30%', justifyContent: "center", alignItems: "center"}}>
                            <Switch
                                value={checked}
                                onValueChange={() => setChecked(!checked)}
                                thumbColor={checked ? 'white' : '#fff'} 
                                trackColor={{false: 'red', true: 'green'}}
                                ios_backgroundColor="#3e3e3e"
                                
                            /> 
                        </View>
                    </View>

                    <View style={styles.section}>
                        <View style={{width: '70%'}}>
                            <Text style={{fontSize: 16, fontWeight: "700", paddingLeft: 16}}>Desativar Notificações</Text>
                        </View>

                        <View style={{width: '30%', justifyContent: "center", alignItems: "center"}}>
                            <Switch
                                value={checked2}
                                onValueChange={() => setChecked2(!checked2)}
                                thumbColor={checked2 ? 'white' : '#fff'} 
                                trackColor={{false: 'red', true: 'green'}}
                                ios_backgroundColor="#3e3e3e"
                                
                            /> 
                        </View>
                    </View> <View style={styles.section}>
                        <View style={{width: '70%'}}>
                            <Text style={{fontSize: 18, fontWeight: "700", paddingLeft: 16}}>Acesso a câmera</Text>
                        </View>

                        <View style={{width: '30%', justifyContent: "center", alignItems: "center"}}>
                            <Switch
                                value={checked3}
                                onValueChange={() => setChecked3(!checked3)}
                                thumbColor={checked3 ? 'white' : '#fff'} 
                                trackColor={{false: 'red', true: 'green'}}
                                ios_backgroundColor="#3e3e3e"
                                
                            /> 
                        </View>
                    </View>
                    


            </View>



        </View>
    </View>
    )

    
}


const styles = StyleSheet.create({

    section:{height: '10%', borderBottomColor: 'lightblue', borderBottomWidth: 1, marginHorizontal: 15, flexDirection: "row", alignItems: "center"}


})

export default TelaConfig