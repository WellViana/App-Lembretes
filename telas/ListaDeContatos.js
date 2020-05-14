import React, { useState } from 'react';
import {
    FlatList,
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableOpacity,
    Alert,
    Platform,
    ScrollView
} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import ContatoItem from '../components/ContatoItem';
import ContatoInput from '../components/ContatoInput';
import Cartao from '../components/Cartao';
import BotaoCabecalho from '../components/BotaoCabecalho'

import medidas from '../medidas/medidas';

const styles = StyleSheet.create({
    telaPrincipalView: {
        padding: medidas.GRANDE
    },
    cartao: {
        margin: medidas.GRANDE
    }
});

const ListaDeContatos = (props) => {
    const [contatoVisualizado, setContatoVisualizado] = useState(null);
    const [isEditando, setIsEditando] = useState(false);

    const [contatos, setContatos] = useState('');
    const [contadorContatos, setContadorcontatos] = useState(10);

    const removerContato = (keyToRemove) => {
        Alert.alert(
            'Remover contato ' + keyToRemove + '?',
            '',
            [
                {
                    text: 'Não'
                },
                {
                    text: 'Sim',
                    onPress: () => {
                        setContatos (contatos => {
                            return contatos.filter((contato) => {
                                return contato.key !== keyToRemove
                            })
                        });
                    }
                }
            ]
        )
    };

    const verContato = (contato) => {
        setContatoVisualizado(contato);
    };

    const adicionarContato = (nome, celular) => {
        setContatos((contatos) => {
            setContadorcontatos(contadorContatos + 2);
            return [
                ...contatos,
                {
                    key: contadorContatos.toString(),
                    nome: nome,
                    celular: celular
                }
            ];
        });
    }

    const editarContato = (nome, celular) => {
        var contatosAtuais = contatos;

        var itemNovo = false;

        contatosAtuais.forEach((item) => {
            if (item.key == contatoVisualizado.key) {
                item.nome = nome
                item.celular = celular

                itemNovo = item;
            }
        })

        setIsEditando(false);
        setContatoVisualizado(null);
    }

    return (
        <View>
            {contatoVisualizado ? (
                <View style={styles.telaPrincipalView}>
                    <TouchableOpacity onPress={() => {
                        setIsEditando(false)
                        setContatoVisualizado(null)
                    }}>
                        <View>
                            <Text>Voltar para a listagem</Text>
                        </View>
                    </TouchableOpacity>
                    {isEditando ? (
                        <View>
                            <ContatoInput onAdicionarContato={editarContato} isEditando={true} />
                        </View>
                    ) : (<View></View>)}
                    <Cartao estilos={styles.contatoItem}>
                        <ContatoItem
                            contato={contatoVisualizado}
                            onPress={verContato}
                            onDelete={removerContato}
                        />
                    </Cartao>
                    <TouchableOpacity onPress={() => {setIsEditando(true)}}>
                        <View>
                            <Text>Editar</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            ) : (
                <View style={styles.telaPrincipalView}>
                    <FlatList
                        data={contatos}
                        renderItem={
                            contato => (
                                <Cartao estilos={styles.contatoItem}>
                                    <ContatoItem
                                        contato={contato.item}
                                        onPress={verContato}
                                        onDelete={removerContato}
                                    />
                                </Cartao>
                            )
                        }
                    />
                </View>
            )}
        </View>
    );
}

ListaDeContatos.navigationOptions = dadosNav => {
    return {
        headerTitle: "Lista de contatos",
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

export default ListaDeContatos;
