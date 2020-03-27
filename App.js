import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, FlatList } from 'react-native';

export default function App() {
  const [contatoNome, setContatoNome] = useState('');
  const [contatoTelefone, setContatoTelefone] = useState('');
  const [contatos, setContatos] = useState([]);
  const [contadorContatos, setContadorContatos] = useState(10);

  const capturarContatoNome = (nome) => {
    setContatoNome(nome)
  };

  const capturarContatoTelefone = (telefone) => {
    setContatoTelefone(telefone)
  };

  const adicionarContato = () => {
    setContatos((contatos) => {
      contatos = [...contatos, { key: contadorContatos.toString(), value: { contatoNome, contatoTelefone } }];
      setContadorContatos(contadorContatos + 2);
      return contatos;
    });
  }

  return (
    <View style={styles.telaPrincipalView}>

      <View style={styles.lembreteView}>
        <TextInput
          placeholder="Nome do Contato"
          style={styles.lembreteInputText}
          onChangeText={capturarContatoNome}
          value={contatoNome}
        />

        <TextInput
          placeholder="Telefone"
          style={styles.lembreteInputText}
          onChangeText={capturarContatoTelefone}
          value={contatoTelefone}
          keyboardType={"phone-pad"}
        />

        <Button
          title="Adicionar Contato"
          onPress={adicionarContato}
        />
      </View>

      <View>
      <Text style={styles.ListaHeader}>Contatos Salvos</Text>
        <FlatList
          style={styles.FlatListStyle}
          data={contatos}
          renderItem={
            contato => (
              <View style={styles.itemNaLista}>
                <Text>{"Nome: " + contato.item.value.contatoNome + "\nTelefone: " + contato.item.value.contatoTelefone}</Text>
              </View>
            )
          }
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  telaPrincipalView: {
    paddingBottom: 50,
    paddingTop: 50
  },
  lembreteView: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: "center"
  },
  lembreteInputText: {
    width: '80%',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    padding: 2,
    marginBottom: 8
  },
  itemNaLista: {
    padding: 12,
    backgroundColor: '#FFF',
    borderBottomColor: '#000',
    borderBottomWidth: 1
  },
  ListaHeader: {
    textAlign: 'center',
    marginTop: 8,
    fontSize: 30
  },
  FlatListStyle: {
    marginTop: 8,
    height: '80%'
  }
});