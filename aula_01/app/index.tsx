import { registerRootComponent } from "expo";
//import ExemploScroll from "@/components/exemploScroll";
//import ExemploButton from "@/components/exemploButton";
//import ExemploSwitch from "@/components/exemploSwitch";
//import ExemploFlat from "@/components/exemploFlat";
//import ExemploSection from "@/components/exemploSection";

//registerRootComponent(ExemploSection)
import React  from 'react'
import { View, StyleSheet } from 'react-native'
import Pagina1 from '../src/pagina1'
import Pagina2 from "../src/pagina2"
import Titulo from '../src/Titulo'

export default () => (
    <View style={style.App}>
        {/*<Pagina1/>*/}
        {/*<Pagina2 />*/}
        <Titulo
        principal="Cadastro de Produto"
        secundario="Tela de cadastro" />
    </View>
)

const style = StyleSheet.create({
    App: {
        backgroundColor: 'AC9',
        flexGrow: 1,
        alignItems: "center",
        justifyContent: "center"
    }
})