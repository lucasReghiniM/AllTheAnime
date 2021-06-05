import React from 'react';

import { Container, Title, SliderRow, ListRow, Item } from './styles';
import Card from "../Card/index"

interface DataProps {
  data: any,
  title: string
}

const Carousel = ({ data, title }: DataProps) => {
  console.log("data =>", data)
  return (
    <Container>
      <Title>{title}</Title>
      <SliderRow>
        <ListRow>
          {data && data.map((item: any) => {
            return (
              <Item key={item.id} >
                <Card 
                  title={item.attributes.canonicalTitle}
                  description={item.attributes.description}
                  rate={item.attributes.averageRating ? item.attributes.averageRating+'%' : "Sem nota"}
                  thumbnail={item.attributes.posterImage.large}
                />
              </Item>
              )
          })}
        </ListRow>
      </SliderRow>
    </Container>
  );
};

export default Carousel;
