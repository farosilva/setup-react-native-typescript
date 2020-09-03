import React from 'react';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

import logoImg from '../../assets/logo/react-native.png';

import { Container, GoToDetailButton, GoToDetailButtonText } from './styles';

const Welcome: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Image source={logoImg} style={{ marginBottom: 50 }} />

      <GoToDetailButton onPress={() => navigation.navigate('Detail')}>
        <Icon name="settings" size={20} color="#312e38" />
        <GoToDetailButtonText>My Setup</GoToDetailButtonText>
      </GoToDetailButton>
    </Container>
  );
};

export default Welcome;
