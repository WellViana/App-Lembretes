import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert, Keyboard} from 'react-native';
import { Cartao } from './Cartao';
import Medidas from '../Medidas/Medidas';

const ContatoItem = (props) => {

    const confirmaExclusao = () => {
        Alert.alert(
            'Deletar contato',
            'Tem certeza que deseja excluir esse item?', //mensagem
            //coleção de botões, cada botão é um JSON
            [
                {text: 'Deletar', style: 'default', onPress: () => props.onDelete(props.chave)},
                {text: 'Cancelar', style: 'default', onPress:  Keyboard.dismiss()},
            ]
        );
       
    }

    return(
        <TouchableOpacity onPress={() => props.onClick(props.chave)} onLongPress={confirmaExclusao}>
            <View style={styles.item}>
                <Cartao estilos={styles.cartao}>
                    <Text>{props.nome}</Text>
                    <Text>{props.fone}</Text>
                </Cartao>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create ({
    item: {
        display: 'flex',
        flexDirection: 'row', 
        justifyContent: 'space-around',
        marginBottom: Medidas.margin10
    },
    cartao: {
        //300 pontos de largura
        width: Medidas.width300,
        maxWidth: Medidas.width100,
        display: 'flex',
        flexDirection: 'row', 
        justifyContent: 'space-around',
        
    },
});

export default ContatoItem;