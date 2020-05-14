import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import cores from '../constantes/Cores'
import medidas from '../medidas/medidas';

const ContatoItem = (props) =>{
    return (
        <TouchableOpacity onPress={props.onPress.bind(this, props.contato)} onLongPress={props.onDelete.bind(this, props.contato.key)}>
            <View style={styles.itemNaLista}>
                <Text>#{props.contato.key}</Text>
                <Text>Nome: {props.contato.nome}</Text>
                <Text>Celular: {props.contato.celular}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    itemNaLista: {
        padding: medidas.PEQUENO,
        backgroundColor: cores.CINZA,
        borderColor: cores.PRETO,
        borderWidth: medidas.MINIMO,
        marginBottom: medidas.PEQUENO,
        borderRadius: medidas.PEQUENO
    }
});

export default ContatoItem;
