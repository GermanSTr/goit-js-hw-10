import axios from 'axios';
axios.defaults.headers.common['x-api-key'] =
  'live_9p5DxSMgGFBSNpUnADSSOGhBmedziXgZyQg8b6E12ufPXByiIM3ZFe61d4GpuLEm';

const BASE_URL = 'https://api.thecatapi.com/v1';
const END_POINT = '/breeds';
const END_POINT_ID = 'images/search';

export function fetchBreeds() {
  const url = BASE_URL + END_POINT;

  return axios.get(url).then(res => res.data);
}

export function fetchCatByBreed(breedId) {
  const BASE_URL = 'https://api.thecatapi.com/v1';
  const END_POINT_ID = '/images/search?';
  const PARAMS = new URLSearchParams({
    breed_ids: breedId,
  });

  const url = BASE_URL + END_POINT_ID + PARAMS;
  return axios.get(url).then(response => response.data);
}
