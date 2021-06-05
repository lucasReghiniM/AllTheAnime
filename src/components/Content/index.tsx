import React from 'react';

//types
import { LayoutProps } from "../../types"

//components
import { Container } from './styles';

const Content = (props: LayoutProps) => {
  return (
    <Container>
      {props.children}
    </Container>
  );
};

export default Content;
