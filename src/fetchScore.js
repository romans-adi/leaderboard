import renderScores from './renderScores.js';
import { getFromStorage, syncData } from './storage.js';

const fetchScore = async (scoresList) => {
  try {
    localStorage.removeItem('scores');
    const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/zKoPy5dluJN9ghN7v3i1/scores/', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      const data = await response.json();
      const scores = data.result;
      const sortedScores = scores.sort((a, b) => b.score - a.score);
      renderScores(sortedScores, scoresList);
      syncData();
    } else {
      throw new Error('Failed to fetch scores from API');
    }
  } catch (error) {
    const storedData = getFromStorage();
    const sortedData = storedData.sort((a, b) => b.score - a.score);
    renderScores(sortedData, scoresList);
  }
};

export default fetchScore;
