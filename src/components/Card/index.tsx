import React from 'react';

import { Container, Img, StarIcon } from './styles';
import { Text, Column, Row } from "../../UI/styles"
import FullMetalBanner from "../../assets/fullMetalBanner.jpg"

interface CardProps {
  title: string,
  description: string,
  rate: string,
  thumbnail: any

}

const Card = ({title, description, rate, thumbnail}: CardProps) => {
  return (
    <Container>
      <Img src={thumbnail}/>
      <Text margin="16px 0 8px 0" color="var(--white)" font="700 18px/23px Roboto">
        {title}
      </Text>
      <Column justify="flex-start" width="100%" height="85px" custom="max-height: 85px; overflow: hidden;">
        <Text color="var(--lightBlue)" font="500 14px/19px Roboto">
          {description}
        </Text>
      </Column>
      <Row width="100%" align="center" margin="12px 0 ">
        <StarIcon />
        <Text color="var(--white)">
          {rate}
        </Text>
      </Row>
      
    </Container>
  );
};

export default Card;
