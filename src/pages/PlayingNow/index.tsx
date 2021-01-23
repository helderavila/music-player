import React from 'react';
import { View } from 'react-native';

// Styles
import {
  Container,
  ContentWrapper,
  AlbumCover,
  MusicInformationWrapper,
  MusicName,
  BandName
} from './styles';

// Components
import Header from '../../components/Header'
import MusicPlayer from './components/MusicPlayer'

const PlayingNow: React.FC = () => {
  return (
    <Container>
      <Header />
      <ContentWrapper>
        <AlbumCover source={{ uri: 'https://images-na.ssl-images-amazon.com/images/I/81EhgcJGTNL._SX466_.jpg' }} />
        <MusicInformationWrapper>
          <MusicName>Californication</MusicName>
          <BandName>Red Hot Chili Peppers</BandName>
        </MusicInformationWrapper>
        <MusicPlayer />
      </ContentWrapper>
    </Container>
  )
}

export default PlayingNow;