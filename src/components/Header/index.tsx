import React from 'react';

import { Ionicons } from '@expo/vector-icons'

// Styles
import { Container, HeaderCell, HeaderText } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <HeaderCell>
        <HeaderText>
          <Ionicons name="chevron-back" size={28} color="black" />
        </HeaderText>
      </HeaderCell>
      <HeaderCell>
        <HeaderText>PLAYING NOW</HeaderText>
      </HeaderCell>
      <HeaderCell>
        <HeaderText>
          <Ionicons name="heart-sharp" size={28} color="#5945F1" />
        </HeaderText>
      </HeaderCell>
    </Container>
  )
}

export default Header;