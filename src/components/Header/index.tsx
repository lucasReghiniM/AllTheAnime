import React from 'react';

//assets
import LogoSvg from "../../assets/logo.svg" 

//components
import { Container, Logo, Text } from './styles';


const Header = () => {

  const headerOptions = [{title: "Mais populares", status: true}, {title: "Mais recentes", status: false}, {title: "Classicos", status: false}]

  return (
    <Container>
      <Logo src={LogoSvg}/>
      {headerOptions && headerOptions.map((item: any, index: any) => {
        return (
          <Text key={index} color={item.status ? "var(--white)" : "var(--lightBlue)"} >
            {item.title}
          </Text>
        )
      })}
    </Container>
  );
};

export default Header;
