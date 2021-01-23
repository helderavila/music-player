import styled from 'styled-components/native';
import { BorderlessButton } from 'react-native-gesture-handler'

export const Container = styled.View`
  width: 100%;
  flex: 1;

  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const HeaderCell = styled(BorderlessButton)`
  padding: 25px;
  justify-content: center;
  align-items: center;
  border-radius: 60px;
`
export const HeaderText = styled.Text`
  font-family: 'Poppins_400Regular';
  color: #A3A3A3;
`
