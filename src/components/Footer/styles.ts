import styled from 'styled-components';
import { Linkedin, Github } from "../../styles/Icons"

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  margin-top: 24px;
  padding: 12px 0;

  width: 100%;
  min-height: 90px;
  
  background: var(--hardBlue);
  color: var(--white);

  h1{
        font-size: 24px;
        font-weight: 700;
        text-align: center;
    }
    h3{
        font-size: 20px;
        font-weight: 400;
        margin-left: 10px;
        max-width: 80%;
        text-align: center;
    }
`;

export const LinksContainer = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 100%;
    h2{
        font-size: 14px;
        font-weight: 400;
        color: var(--white);
    }
`;

export const Circulo = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;
  
  width: 60px;
	height: 60px;

	border-radius: 50%;
	overflow: hidden;

  border: 2px solid var(--white);
  margin: 22px 0 10px 0;

`;

export const CircleWrapper = styled.a`
  display: flex;
  flex-direction: column;
  margin: 0 80px;
  align-items: center;
  text-decoration: none;
  @media(max-width: 500px){
      margin: 0 40px;
  }
`;

export const LinkedinIcon = styled(Linkedin)`
  color: var(--white);
  width: 24px;
  height: auto;
`;

export const GithubIcon = styled(Github)`
  color: var(--white);
  width: 24px;
  height: auto;
`;