import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  align-items: center;

  width: 100%;
  height: 90px;

  padding: 24px;
  margin-bottom: 24px;
  background: transparent;

  @media (max-width: 760px){
    justify-content: center;
  }
`;

export const Logo = styled.img`
  width: 175px;
  height: auto;

  margin-right: 40px;

  cursor: pointer;

  @media (max-width: 760px){
    margin-right: 0;
  }
`;

export const Text = styled.p`
  font: 500 20px/57px Roboto;
  color: ${p => p.color};

  margin-right: 24px;

  transform: scale(0.9);
  transition: all ease 0.2s;
  cursor: pointer;

  :hover{
    transform: scale(1);
  }

  @media (max-width: 760px){
    display: none;
  }
`;