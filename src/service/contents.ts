import Axios from "axios";

export const getAnime = async () => {
  try {
    let fetch = await Axios.get(`https://kitsu.io/api/edge/anime`);

    return fetch.data;
  } catch (error) {
    console.log("get erro", error);
  }
};

export const getManga = async () => {
  try {
    let fetch = await Axios.get(`https://kitsu.io/api/edge/manga`);

    return fetch.data;
  } catch (error) {
    console.log("get erro", error);
  }
};
