/* eslint-disable no-unused-vars */
import 'lodash';
import './style.css';
import render from './modules/renderScores.js';
import { postApi, getApi } from './modules/apiInteracting.js';

const urlGame = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/ZxQudq7sBhFDKmuNFng9/scores/';

const form = document.getElementById('form');
const refresh = document.getElementById('refresh');
const table = document.getElementById('score-table');
const icon = document.querySelector('.icon');

refresh.addEventListener('click', () => {
  getApi(urlGame)
    .then((response) => {
      table.innerHTML = '';
      render(response.result);
    });
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  postApi(urlGame);
  e.target.reset();
});

getApi(urlGame)
  .then((res) => {
    render(res.result);
  });
