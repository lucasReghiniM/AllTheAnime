import React, { useState, useEffect } from 'react';

//service
import { getAnime, getManga } from "../../service/contents"

//components
import { Wrapper, ColumnWrapper, LoaderOverlay, Loader } from './styles';
import SideBar from "../../components/SideBar"
import Carousel from "../../components/Carousel"
import Content from "../../components/Content"
import Header from "../../components/Header"

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
      <Content>
        <SideBar /> 
      </Content>
      <ColumnWrapper>
        <Header />
        
        {anime.length != 0 && (
          <Carousel data={anime} title={"Animes"}/>
        )}
        {manga.length != 0 && (
          <Carousel data={manga} title={"Mangas"}/>
        )}
        {anime.length <= 0 && manga.length <= 0 && (
          <LoaderOverlay>
            <Loader src={"https://lh4.googleusercontent.com/proxy/u4zxneoolqdlg0vZ689_oJevh0p0giXY3_nOCDhtHLAFtqsmC5sDsFEWWHQ0DZutCsDriyAXZp3e40grA6KBDS2X_h1V_d3JEZa25ZP-wwOTFYpNB5ijbbNSITNqRS-TmoyGj51r1q7m4lt6nHglKOGMK94Bna86S8KQxJbi6Ne15agvfmrZ=s0-d"}/>
          </LoaderOverlay>
        )}
        
      </ColumnWrapper>
    </Wrapper>
  );
};

export default Main;
