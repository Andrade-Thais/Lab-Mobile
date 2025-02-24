import React from "react";
import { View, Text } from "react-native";
import { styles } from './styles';

const HomeScreen = () => {

    return (
        <View style={style.container}>
            <Text style={styles.text}>Bem vindo ao APPBoss</Text>
        </View>
    );
};

export default HomeScreen;
