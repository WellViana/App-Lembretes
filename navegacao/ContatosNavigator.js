import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'
import Cores from '../constantes/Cores';
import ListaDeContatos from '../telas/ListaDeContatos'
import NovoContato from '../telas/NovoContato'

const LugaresNavigator = createStackNavigator({
    ListaDeContatos: ListaDeContatos,
    NovoContato: NovoContato
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backGroundColor: Platform.OS === 'android' ? Cores.primary : ''
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Cores.primary
    }
});

export default createAppContainer(LugaresNavigator);
