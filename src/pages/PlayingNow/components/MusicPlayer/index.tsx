import React from 'react';

// Libs
import * as Progress from 'react-native-progress';

// Styles
import {
  Container,
  TimeLineWrapper,
  TimeWrapper,
  Time
} from './styles';

const MusicPlayer: React.FC = () => {
  return (
    <Container>
      <TimeLineWrapper>
        <TimeWrapper>
          <Time>2:21</Time>
          <Time>5:23</Time>
        </TimeWrapper>
        <Progress.Bar progress={0.3} width={210} borderWidth={0} unfilledColor="#e3e3e3" color="#5945F1" />
      </TimeLineWrapper>
    </Container>
  )
}

export default MusicPlayer;