import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';


const Separator = () => <View style={styles.separator} />

const ExemploButton = () => (
    <SafeAreaView style = {styles.container}>
        <View>
            <Text style = {styles.title}>
                o titulo e o manipulador onPress são necessários.
                Recomenda-se definir acessibilityLabel para ajudar
                a tornar seu aplicativo utilizavel por todos.
            </Text>
            <Button
                title="Aperte aqui"
                onPress={() => Alert.alert('saida simples de um botão')}/>

        </View>
        <Separator />

        <View>
            <Text style={styles.title}>
                ajuste a or de uma forma que pareça padrão em cada plataforma
                no ios, o acessorio de cor controla a cor do texto
                no android, a cor ajutsa a cor de fundo do botão
            </Text>
            <Button
            title="aperte aqui"
            color="#f194ff"
            onPress={() => Alert.alert('botão com cor ajustada precionado')}/>
        </View>
        <Separator />
        <View>
            <Text style={styles.title}>
                todas as interações para o component são desabilitadas
            </Text>
            <Button
            title="apert aqui"
            disabled
            onPress={() => Alert.alert('não é possivel clicar')}/>
        </View>
        <Separator />
        <View>
            <Text style={styles.title}>
                essa estrategia de layout permite que o titulo defina a largura
            </Text>
            <View style={styles.fixToText}>
                <Button
                title="botão esquerda"
                onPress={() => Alert.alert('botão esquerda aperte')}/>
                <Button
                title="botão direita"
                onPress={() => Alert.alert('botão direita aperte')}/>
            </View>
        </View>
    </SafeAreaView>
)


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 16,
    },
    title: {
        textAlign: 'center',
        marginVertical: 8,
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth, 
    },
});
export default ExemploButton;
