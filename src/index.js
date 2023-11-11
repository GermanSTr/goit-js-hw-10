import axios from 'axios';
import { fetchBreeds } from './cat-api';
import { fetchCatByBreed } from './cat-api';

axios.defaults.headers.common['x-api-key'] =
  'live_9p5DxSMgGFBSNpUnADSSOGhBmedziXgZyQg8b6E12ufPXByiIM3ZFe61d4GpuLEm';

const selectBreedEl = document.querySelector('.breed-select');
const catInfo = document.querySelector('.cat-info');

fetchBreeds().then(data => {
  // console.log(data);
  data.map(breed => {
    const option = document.createElement('option');
    option.textContent = breed.name;
    option.value = breed.id;
    selectBreedEl.appendChild(option);
  });
});

selectBreedEl.addEventListener('change', changeBreed);

function changeBreed(e) {
  let breedIdCat = e.target.value;
  fetchCatByBreed(breedIdCat).then(data => {
    const markup = breedRender(data);
    console.log(markup);
    catInfo.innerHTML = markup;
  });
}

function Breedmarkup({ url, breeds }) {
  return `<img src="${url}" alt="${breeds[0].name}" width="800" height="auto">
  <h2>${breeds[0].name}</h2>
  <p>${breeds[0].description}</p>
  <p>${breeds[0].temperament}</p>`;
}

function breedRender(breeds) {
  return breeds.map(Breedmarkup).join('');
}
