import styled from 'styled-components';
import { StyledIconBase } from '@styled-icons/styled-icon'
import { StylesProps } from "../types"


export const IconStyleWrapper = styled.div<StylesProps>`
  ${StyledIconBase} {
    color: ${p => p.color};
    width: ${p => p.width};
    height: ${p => p.height};
    margin: ${p => p.margin};
    transition: all ease 0.3s;
  }
`

export const Text = styled.p<StylesProps>`
  width: ${p => p.width};
  height: ${p => p.height};
  font: ${p => p.font || ""};
  color: ${p => p.color || ""};
  margin: ${p => p.margin || ""};
  z-index: ${p => p.zIndex};
  text-align: ${p => p.tAlign};
  max-width: ${p => p.maxWidth};
  max-height: ${p => p.maxHeight};
  transition: all ease 0.3s;
  ${p => p.custom}
`;

export const Row = styled.div<StylesProps>`
  display: flex;
  align-items: center;
  justify-content: ${p => p.justify};
  align-items: ${p => p.align};

  width: ${p => p.width};
  height: ${p => p.height};

  background: ${p => p.background || ""};
  margin: ${p => p.margin || "0"};
  
  border-radius: ${p => p.radius};
  position: ${p => p.position};

  ${p => p.custom}

`;

export const Column = styled.div<StylesProps>`
  display: flex;
  flex-direction: column;
  align-items: ${p => p.align || "center"};
  justify-content:  ${p => p.justify || "center"};

  width: ${p => p.width};
  height: ${p => p.height};

  background: ${p => p.background || ""};
  margin: ${p => p.margin || "0"};
  position: ${p => p.position};
  
  border-radius: ${p => p.radius};
  
  ${p => p.custom}
`;