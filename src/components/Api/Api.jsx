import axios from 'axios';

const baseURL = 'https://pixabay.com/api/';
const API_KEY = '34395011-b1cfd26af0022eb06f8fcba6f';
const per_page = 20;
export async function getImages(query, page) {
  const config = {
    params: {
      key: API_KEY,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
      per_page: per_page,
    },
  };
  const response = await axios.get(
    `${baseURL}?q=${query}&page=${page}`,
    config
  );
  const totalImg = response.data.totalHits;
  const images = response.data.hits;
  const totalPage = Math.ceil(totalImg / per_page);
  return { images, totalImg, totalPage };
}
