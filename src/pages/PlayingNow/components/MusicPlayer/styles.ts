import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  flex: 1;
  align-items: center;  
  margin-top: 64px;
`;

export const TimeLineWrapper = styled.View`
  justify-content: center;
  align-items: center;
  width: 90%;
`
export const TimeWrapper = styled.View`
  flex-direction: row;
  width: 60%;
  justify-content: space-between;
`
export const Time = styled.Text`
  font-family: 'Poppins_400Regular';
  color: #A3A3A3;
`

export const ProgressBar = styled.View`
  height: 10px;
  width: 60%;
  background: yellow;
`