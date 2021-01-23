import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #FFF;
`;

export const ContentWrapper = styled.View`
  flex: 6;
  justify-content: flex-start;
  align-items: center;
`

export const AlbumCover = styled.Image`
  height: 280px;
  width: 280px;
  border-radius: 200px;
`

export const MusicInformationWrapper = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 28px;
`
export const MusicName = styled.Text`
  font-family: 'Poppins_500Medium';
  font-size: 32px;
`
export const BandName = styled.Text`
  font-family: 'Poppins_400Regular';
  font-size: 16px;
`