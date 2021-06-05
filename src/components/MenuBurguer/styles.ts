import styled from 'styled-components';

export const Container = styled.span`
  display: none;
  background: var(--white);
  
  width: 30px;
  height: 2px;

  position: absolute;
  top: 0;
  left: 0;
  margin: 52px 0 0 24px;

  transition: .3s ease-in-out;
  
  @media (max-width: 760px){
    display: block;
  }

  ::before, ::after{
    background: var(--white);
    content: '';
    display: block;

    width: 100%;
    height: 100%;

    position: absolute;
    transition: .3s ease-in-out;
  }

  ::before{
    top: -10px;
  }

  ::after{
    bottom: -10px;
  }


`;

export const Clicker = styled.input`
  display: none;

  :checked ~ label .menu{
    transform: rotate(45deg);

    ::before{
      transform: rotate(90deg);
      top: 0;
    }
    ::after{
      transform: rotate(90deg);
      bottom: 0;
    }
  }
`;

export const Label = styled.label`

`;