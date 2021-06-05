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

  let fixDescription = description

  if(fixDescription.length > 200){
    fixDescription = fixDescription.substring(0, 200)+'...'
  }

  return (
    <Container>
      <Img src={thumbnail}/>
      <Text margin="16px 0 8px 0" color="var(--white)" font="700 18px/23px Roboto" title={title} custom="width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
        {title}
      </Text>
      <Column justify="flex-start" width="100%" height="85px" >
        <Text color="var(--lightBlue)" font="500 14px/19px Roboto">
          {fixDescription}
        </Text>
      </Column>
      <Row width="100%" align="center" margin="22px 0 0 0">
        <StarIcon />
        <Text color="var(--white)" title={rate}>
          {rate}
        </Text>
      </Row>
      
    </Container>
  );
};

export default Card;
