import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import BotaoCabecalho from '../components/BotaoCabecalho'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import ContatoInput from '../components/ContatoInput';

const NovoContato = (props) => {
    return (
        <ScrollView>
            <View>
                <ContatoInput onAdicionarContato={props.adicionarContato} isEditando={false} />
            </View>
        </ScrollView>
    )
};

const estilos = StyleSheet.create({
});

NovoContato.navigationOptions = dadosNav => {
    return {
        headerTitle: "Adicionar novo contato",
        headerRight: (
            <HeaderButtons HeaderButtonComponent={BotaoCabecalho}>
                <Item
                    title="Adicionar"
                    iconName={Platform.OS === 'android' ? 'md-add' : 'ios-add'}
                    onPress={() => { dadosNav.navigation.navigate("NovoContato") }}
                />
            </HeaderButtons>
        )
    }
}

export default NovoContato;
