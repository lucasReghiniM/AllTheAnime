import styled from 'styled-components';
import { ChevronBack, ChevronForward } from '../../styles/Icons' 

interface StyleProps{
  marginLeft?: string,
  width?: any
}

export const Container = styled.div`
//movieRow
  margin-bottom: 30px;
  position: relative;

  svg{
    position: absolute;
    cursor: pointer;
  } 

  :hover{
    svg{
      opacity: 1;
    }
  }

  @media (max-width: 760px){
    svg{
      opacity: 1;
    }
  }
`;

export const Title = styled.p`
  font: 700 24px/29px Roboto;
  color: var(--white);
  margin: 0 0 0 24px;
`;

export const SliderRow = styled.div`
//list area
  overflow-x: hidden;
  padding-left: 30px;

`;

export const ListRow = styled.div<StyleProps>`
//list
  width: ${p => p.width || "999999px"};
  margin-left: ${p => p.marginLeft};

  transition: all ease 0.5s;
`;

export const Item = styled.div`
  display: inline-block;
  transform: scale(0.92);
  transition: all ease 0.3s;

  :hover{
    transform: scale(1);
  }

  svg{
    position: relative;
  }
`;

export const ArrowLeft = styled(ChevronBack)`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  width: 40px;
  height: 80%;

  z-index: 3;
  left: 0;
  margin-top: 12px;

  background: rgba(0, 0, 0, 0.2);
  color: var(--white);
  opacity: 0;

  transition: all ease 0.3s;

`;

export const ArrowRight = styled(ChevronForward)`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  width: 40px;
  height: 80%;

  z-index: 3;
  right: 0;
  margin-top: 12px;

  background: rgba(0, 0, 0, 0.2);
  color: var(--white);
  opacity: 0;

  transition: all ease 0.3s;

  
`;