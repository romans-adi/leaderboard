import './styles.css';
import fetchScore from './modules/fetchScore.js';
import addScore from './modules/addScore.js';

const refreshBtn = document.querySelector('#refresh');
const playerData = document.querySelector('#player-data');
const scoresList = document.querySelector('.scoreboard');

fetchScore(scoresList);
refreshBtn.addEventListener('click', () => fetchScore(scoresList));
playerData.addEventListener('submit', addScore);
