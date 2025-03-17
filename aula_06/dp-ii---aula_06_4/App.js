import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView } from 'react-native'
import Botao from './src/botao'

const Comp = () => {
  const clickHandler = () => {
    alert ('Saída de botão clicado');
  };

  return (
    <SafeAreaView style={style.container}>
    <View style={style.container}>
    <Text style={style.Titulo1}> Botão de ação flutuante
    </Text>
    <Text style={style.Titulo2}>
    Clique no botão para ver a mensagem de saida
    </Text>
    <TouchableOpacity
    activeOpacity={0.7}
    onPress={clickHandler}
    style={style.Botao}>
    <Image
    source={{
      uri:'https://www.pngall.com/wp-content/uploads/10/Plus-Symbol-Vector-PNG-Pic.png'
    }}
    style={style.Tela3}
    />
    </TouchableOpacity>
    </View>
    </SafeAreaView>
  );
};

export default Comp;

const style = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#0CF',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Titulo1:{
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
  },
  Titulo2:{
    fontSize: 16,
    textAlign: 'center',
    padding: 10,
  },
  Botao:{
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    rigth: 30,
    bottom: 30,
  },
  Tela3: {
    resizeMode: 'contain',
    width:70,
    height:70,
  },
});
