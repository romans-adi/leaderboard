import './styles.css';
import fetchScore from './fetchScore.js';
import addScore from './addScore.js';

const refreshBtn = document.querySelector('#refresh');
const playerData = document.querySelector('#player-data');
const scoresList = document.querySelector('.scoreboard');

fetchScore(scoresList);
refreshBtn.addEventListener('click', () => fetchScore(scoresList));
playerData.addEventListener('submit', addScore);
