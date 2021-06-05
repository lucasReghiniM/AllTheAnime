import React, { useState } from 'react';

//components
import { Container, Title, SliderRow, ListRow, Item, ArrowLeft, ArrowRight } from './styles';
import Card from "../Card/index"

interface DataProps {
  data: any,
  title: string
}

const Carousel = ({ data, title }: DataProps) => {
  const[scrollX, setScrollX] = useState<any>(-800)

  const handleLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth / 2)

    if(x > 0){
      x = 0
    }

    setScrollX(x)
  }

  const handleRightArrow = () => {
    let x = scrollX - Math.round(window.innerWidth / 2)
    let width = data.length * 290

    if((window.innerWidth - width) > x){
      x = (window.innerWidth - width) - 60
    }

    setScrollX(x)
  }

  return (
    <Container>
      <Title>{title}</Title>
      <ArrowLeft onClick={handleLeftArrow} />
      <ArrowRight onClick={handleRightArrow} />

      <SliderRow>
        <ListRow width={(data.length * 290)+"px"} marginLeft={scrollX+"px"}>
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
