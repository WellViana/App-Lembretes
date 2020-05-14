import React from 'react';
import { View, StyleSheet } from 'react-native';

import cores from '../constantes/Cores'
import medidas from '../medidas/medidas'

const Cartao = (props) => {
    return (
        <View style={{...estilos.cartao, ...props.estilos}}>
            {props.children}
        </View>
    );
};

const estilos = StyleSheet.create({
    cartao: {
        shadowRadius: medidas.PEQUENO,
        backgroundColor: cores.BRANCO,
        padding: medidas.PEQUENO,
    }
});

export default Cartao;
