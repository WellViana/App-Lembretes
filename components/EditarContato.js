import React, { useState } from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';
import Cores from '../Cores/Cores';
import Medidas from '../Medidas/Medidas';

const EditarContato = (props) => {
    const [nome, setNome] = useState (props.nome);
    const [fone, setFone] = useState(props.fone);

    const mudouNome = (nome) => {
        setNome (nome);
    }

    const mudouFone = (fone) => {
        setFone(fone);
    }

    function limpaEnvia(){
        props.handleSaveClick(nome, fone);
        setFone('');
        setNome('');
    }

    return (
        <View> 
            <TextInput placeholder="Nome" value={nome} onChangeText={mudouNome}/>
            <TextInput style={styles.input} placeholder="Telefone" value={fone} onChangeText={mudouFone} keyboardType={'numeric'}/>
            <View style={styles.buttons}> 
                <Button title="Salvar" onPress={limpaEnvia} color={Cores.primary}/>
                <Button title="Página inicial" onPress={() => props.handleBack()} color={Cores.gray}/>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    buttons: {
        display: 'flex',
        flexDirection: 'row', 
        justifyContent: 'space-around'
    },
    component: {
       backgroundColor: Cores.background 
    },
    input:{
        marginBottom: Medidas.margin15
    }
});



export default EditarContato;