import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Botao from './src/botao'


const App = () => {
  const [count, setCount] = useState(0);
  const onPress = () => setCount(prevCount => prevCount + 1);

  return(
  <View style={style.Tela1}>
    <View style={style.Tela2}>
      <Text> Conatdor: {count}</Text>
    </View>
    <TouchableOpacity style = {style.botao} onPress={onPress}>
      <Text>Pressione aqui!</Text>
    </TouchableOpacity>
  </View>
);
};
const style = StyleSheet.create({
  Tela1: {
    flex: 1,
    backgroundColor: '#AFF',
    justifyContent: "center",
    paddingHorizontal: 10,
},
botao:{
  alignItems: 'center',
  backgroundColor: '#0AF',
  padding: 10,
},
Tela2: {
  alignItems:'center',
  padding:10,

},
});

export default App;