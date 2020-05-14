import React from 'react';
import Cores from '../constantes/Cores'
import {
    Platform
} from 'react-native';
import { HeaderButton, Ionicons } from 'react-navigation-header-buttons';

const BotaoCabecalho = (props) => {
    return (
        <HeaderButton
            {...props}
            IconComponent={Ionicons}
            iconSize={23}
            color={Platform.OS === 'android' ? 'black' : Cores.primary}
        />
    );
};

export default BotaoCabecalho;
