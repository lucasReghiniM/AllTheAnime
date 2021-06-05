import React from 'react';

import { Container } from './styles';

export interface LayoutProps  { 
  children: React.ReactNode
}

const Content = (props: LayoutProps) => {
  return (
    <Container>
      {props.children}
    </Container>
  );
};

export default Content;
