import React from 'react';

import { Container, HomeIcon, PlayIcon, ChatIcon, GroupIcon } from './styles';
import { Row } from '../../UI/styles'

const SideBar = () => {
  return (
    <Container>
      <HomeIcon />
      <Row width="70%" height="2px" background="var(--lightBlue)"/>
      <PlayIcon />
      <ChatIcon />
      <GroupIcon />
    </Container>
  );
};

export default SideBar;
