import styled from 'styled-components';
import { Star } from "../../styles/Icons" 

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 290px;
  height: 375px;
`;

export const Img = styled.img`
  width: 100%;
  height: 200px;
  background: red;
  border-radius: 5px 5px 0px 0px;
`;

export const StarIcon = styled(Star)`
  width: 20px;
  height: 20px;
  margin-right: 8px;
  color: var(--yellow)
`;