import React, { useState, useEffect } from 'react';

import { Wrapper, ColumnWrapper } from './styles';
import SideBar from "../../components/SideBar"
import Carousel from "../../components/Carousel"
import { getAnime, getManga } from "../../service/contents"

const Main = () => {
  const [anime, setAnime] = useState<any>([]);
  const [manga, setManga] = useState<any>([]);

  useEffect(() => {
    const findAnime = async () => {
      let arr = []
  
      try {
        let fetch = await getAnime()
        arr = fetch.data

        setAnime(arr)
      } catch (error) {
        alert('Um erro ocorreu por favor tente carregar a página novamente!')
        console.log("Deu erro =>", error)
      }
    }

    const findManga = async () => {
      let arr = []
  
      try {
        let fetch = await getManga()
        arr = fetch.data

        setManga(arr)
      } catch (error) {
        alert('Um erro ocorreu por favor tente carregar a página novamente!')
        console.log("Deu erro =>", error)
      }
    }

    findAnime()
    findManga()
  }, [])

  return (
    <Wrapper>
      <SideBar />
      <ColumnWrapper>
        {anime && (
          <Carousel data={anime} title={"Animes"}/>
        )}
        {manga && (
          <Carousel data={manga} title={"Mangas"}/>
        )}
      </ColumnWrapper>
    </Wrapper>
  );
};

export default Main;
