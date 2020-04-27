import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button} from 'react-native';
import { Cartao } from './Cartao';
import Medidas from '../Medidas/Medidas';
import Cores from '../Cores/Cores';

export const ExibirContato = (props) => {
   
    return(
        <View>
            <View style={styles.displayFlex}>
                <Text style={styles.tableHeader}>Id</Text>
                <Text style={styles.tableHeader}>Nome</Text>
                <Text style={styles.tableHeader}>Telefone</Text>
            </View>
            <View >
                <Cartao style={styles.displayFlex}>
                    <Text>{props.id}</Text>
                    <Text>{props.nome}</Text>
                    <Text>{props.fone}</Text>
                </Cartao>
            </View>
            <View style={styles.buttons}> 
                <Button title="Voltar" onPress={() => props.handleBack()} color={Cores.gray}></Button>
                <Button title="Editar contato" onPress={() => props.handleEdit()} color={Cores.primary}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create ({
    item: {
        backgroundColor: Cores.background,
    },
    cartao: {
        display: 'flex', 
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    buttons: {
        display: 'flex',
        flexDirection: 'row', 
        justifyContent: 'space-between',
        margin: Medidas.margin15
    },
    tableHeader: {
        fontWeight: 'bold',
        marginBottom: Medidas.margin10,
        color: Cores.primary
    },
    displayFlex: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
});
