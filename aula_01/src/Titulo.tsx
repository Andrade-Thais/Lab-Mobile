import React from 'react'
import { View, Text } from 'react-native'
import estilo from './estilo'

export default comp => {
    return( 
        <View>
            <Text style={estilo.FontGrande}>{comp.principal}</Text>
            <Text>{comp.secundario}</Text>
        </View>
    )
}