import React from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';
import Cores from '../Cores/Cores';
import Medidas from '../Medidas/Medidas';

export const Cartao = (props) => {
    return(
        // Eu uso o spread operator para mesclar os estilos css
        <View style={{...estilos.cartao, ...props.estilos}}>
            {props.children}
        </View>
    );

};

const estilos = StyleSheet.create({
    cartao: {
        shadowColor: Cores.black,
        shadowOffset: {
            width: Medidas.width0,
            height: Medidas.height2
        },
        shadowRadius: Medidas.shadowRadius6,
        shadowOpacity: Medidas.opacity,
        backgroundColor: Cores.white,
        elevation: Medidas.elevation,
        padding: Medidas.padding12,
        borderRadius: Medidas.borderRadius
    }
});
