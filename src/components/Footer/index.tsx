import React from 'react';

//components
import { Container, LinksContainer, Circulo, CircleWrapper, LinkedinIcon, GithubIcon } from './styles';

const Footer = () => {
  return (
    <Container>
      <h1>Lucas Reghini Magalhães</h1>
      <h3>Dev frontend e webdesigner</h3>

      <LinksContainer>
          <CircleWrapper target="_blank" href="https://github.com/lucasReghiniM?tab=repositories">
            <Circulo>
              <GithubIcon />
            </Circulo>
            <h2>Portifolio</h2>
          </CircleWrapper>
          
          <CircleWrapper target="_blank" href="https://www.linkedin.com/in/lucasreghini/">
          <Circulo>
            <LinkedinIcon />
          </Circulo>
            <h2>Linkedin</h2>
          </CircleWrapper>
        </LinksContainer>
    </Container>
  );
};

export default Footer;
