import React from 'react';

//components
import { Container, Clicker, Label } from './styles';

const MenuBurguer = () => {
  return (
    <>
      <Clicker type="checkbox" id="checkbox"/>
      <Label htmlFor="checkbox">
        <Container className="menu" />
      </Label>
    </>
  );
};

export default MenuBurguer;
