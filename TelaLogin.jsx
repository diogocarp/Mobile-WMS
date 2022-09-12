import React from 'react';
import { View, StyleSheet, Image, TextInput, Button, Text, TouchableHighlight} from 'react-native';



const TelaLogin = () =>{

    return(
        <View style={{backgroundColor:"#82BFF5", height:"100%",  
                    justifyContent: 'center', alignItems: 'center', 
                    flexDirection:'column'}}>

            <View style={{marginTop: 50,backgroundColor:"white", height:"45%", borderRadius: 30, width:"80%"}}>
            <Text style={{fontSize:20, marginTop:15, marginLeft:25}}>Email</Text>    
            <TextInput 
                style={styles.input}
                placeholder="Digite seu e-mail"
                placeholderTextColor="lightgray"
               
                />
            <Text style={{fontSize:20, marginTop:20, marginLeft:25}}>Senha</Text> 
            <TextInput 
                style={styles.input}
                placeholder="Digite sua senha"
                placeholderTextColor="lightgray"
                secureTextEntry={true}
                />
                <Text style={{textAlign: 'center', marginTop: 10}}>Esqueceu a <b>senha?</b></Text>
            </View>    
        </View>
    )
}


const styles = StyleSheet.create({
    input: {
        marginTop: 5,
        marginLeft: 28,
        marginRight: 10,
        padding: 5,
        width: 240,
        borderStyle: 'solid',
        borderWidth: 2,
        backgroundColor: '#fff',
        fontSize: 15,
        height:50,
        
        //color: "lightgray",
        borderRadius: 15
    },

    button:{

        



    }

})

export default TelaLogin;