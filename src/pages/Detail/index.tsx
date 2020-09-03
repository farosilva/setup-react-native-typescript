import React from 'react';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { FlatList, TouchableHighlight } from 'react-native-gesture-handler';

import logoImg from '../../assets/logo/react-native.png';
import Button from '../../components/Button';

import { Container, Item } from './styles';

const Detail: React.FC = () => {
  const navigation = useNavigation();

  const data = [
    {
      title: 'Typescript',
      key: 'item1',
    },
    {
      title: 'React Navigation',
      key: 'item2',
    },
    {
      title: 'Styled Components',
      key: 'item3',
    },
    {
      title: 'Vector Icons',
      key: 'item4',
    },
    {
      title: 'Customs Fonts',
      key: 'item5',
    },
    {
      title: 'Editor Config | ESlint | Prettier',
      key: 'item6',
    },
  ];

  return (
    <Container>
      <Image source={logoImg} style={{ marginBottom: 0 }} />

      <FlatList
        data={data}
        renderItem={({ item }) => (
          <TouchableHighlight key={item.key} style={{ alignSelf: 'center' }}>
            <Item>{item.title}</Item>
          </TouchableHighlight>
        )}
      />
      <Button onPress={() => navigation.goBack()}>Voltar</Button>
    </Container>
  );
};

export default Detail;
