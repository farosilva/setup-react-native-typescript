import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const GoToDetailButton = styled.TouchableOpacity`
  width: 100%;
  height: 60px;
  background: #61dafb;
  border-radius: 10px;
  margin-top: 8px;

  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const GoToDetailButtonText = styled.Text`
  font-family: 'RobotoSlab-Regular';
  font-size: 16px;
  color: #312e38;
  margin-left: 12px;
`;
