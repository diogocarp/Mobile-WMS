import React, {useEffect, useState} from "react";
import { View, Image, Text } from "react-native";
import api from "../config/conex";



const TelaUsuario = ({}) => {

    const [user, setUser] = useState()

    useEffect (() => {
        api.get('api/aluno/1')
        .then((response) => setUser(response.data))
        .catch((err) => {
            console.error('erro' + err)
        })
    }, [])
 
    return(
        <View style={{flex:1}}>
        <View style={{backgroundColor: "#82BFF5",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",}}>
            <Text
          style={{
            marginBottom:30,
            fontSize: 20,
            fontStyle: "normal",
            fontWeight: "700",
            color: "white",
          }}
        >
          Perfil
        </Text>
        
             <View style={{
               
                backgroundColor: "white",
                height: "80%",
                borderRadius: 30,
                width: "80%",}}
                >

                {/* conteudo a ser renderizado quando pegar api */}    
                <View style={{height: '50%', width: '100%', justifyContent: "center", alignItems: "center"}}>
                        <Image 
                        source={require('../assets/2.png')}
                        style={{width: 140, height: 150, marginTop: 20}}
                        />
                        <Text style={{marginTop: 10, fontSize: 18, fontWeight: "600"}}>{user?.nome}</Text>
                    </View>

                    
                     <View style={{marginTop: 50, marginLeft: 20}}>
                        <Text style={{marginTop: 10, fontSize: 16, fontWeight: "400"}}> N° de matrícula: {user?.codMatricula}</Text>

                        <Text style={{marginTop: 10, fontSize: 16, fontWeight: "400"}}> E-mail:{user?.email}</Text>
                    </View> 


            </View>



        </View>
    </View>
    )

}
export default TelaUsuario