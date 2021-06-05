import styled from 'styled-components';
import { Home, Play, ChatbubbleEllipses, People } from "../../styles/Icons" 


export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 76px;
  height: 100vh;

  align-items: center;
  position: fixed;
  
  background: var(--hardBlue);
  box-shadow: 2px 0px 2px 2px rgba(255, 255, 255, 0.02);

  svg{
    cursor: pointer;
  }

`;

export const HomeIcon = styled(Home)`
  width: 30px;
  height: auto;

  margin: 30px 0 12px;
  color: var(--white);
`;

export const PlayIcon = styled(Play)`
  width: 25px;
  height: auto;

  margin: 18px 0;
  color: var(--lightBlue);
`;

export const ChatIcon = styled(ChatbubbleEllipses)`
  width: 25px;
  height: auto;

  margin: 18px 0;
  color: var(--lightBlue);
`;

export const GroupIcon = styled(People)`
  width: 25px;
  height: auto;

  margin: 18px 0;
  color: var(--lightBlue);
`;