import styled from 'styled-components';

export const Container = styled.div`
//movieRow
  margin-bottom: 30px;
`;

export const Title = styled.p`
  font: 700 24px/29px Roboto;
  color: var(--white);
  margin: 0 0 0 24px;
`;

export const SliderRow = styled.div`
//list area
  overflow-x: hidden;
  padding-left: 40px;
`;

export const ListRow = styled.div`
//list
  width: 9999px;
`;

export const Item = styled.div`
  display: inline-block;
  transform: scale(0.92);
  transition: all ease 0.3s;

  :hover{
    transform: scale(1);
  }
`;