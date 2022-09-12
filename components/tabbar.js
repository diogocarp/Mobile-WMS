import React from "react";

import { View, Image } from "react-native";
import styles from "./tabStyles"




 const TabBar = () => (


    <View style={styles.container}>
        
        
        <Image style={styles.size} source={require('../assets/3.png')}/>
        <Image style={styles.size} source={require('../assets/7.png')}/>
    </View>


);

export default TabBar;