import { saveToStorage } from './storage.js';

const userInput = document.querySelector('#input-user');
const scoreInput = document.querySelector('#input-score');
const errorContainer = document.querySelector('.error-container');

const displayErrorMessage = (message, timeout = 3000) => {
  errorContainer.innerHTML = '';
  const errorMessage = document.createElement('span');
  errorMessage.textContent = message;
  errorMessage.classList.add('font-bold', 'red');
  errorContainer.appendChild(errorMessage);

  setTimeout(() => {
    errorMessage.style.opacity = '0';
    errorMessage.style.transition = 'opacity 0.3s';

    setTimeout(() => {
      errorMessage.remove();
    }, 500);
  }, timeout);
};

const addScore = async (event) => {
  event.preventDefault();

  const name = userInput.value.trim();
  const score = parseInt(scoreInput.value.trim(), 10);

  if (name === '' || Number.isNaN(score)) {
    displayErrorMessage('Please enter a valid name and score');
    return;
  }

  try {
    const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/MfoLYZGPReGfyuYdGRJ7/scores/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: name,
        score,
      }),
    });

    if (response.ok) {
      userInput.value = '';
      scoreInput.value = '';
      saveToStorage({ name, score });
    } else {
      const data = await response.json();
      throw new Error(`Failed to add score: ${data.error}`);
    }
  } catch (error) {
    displayErrorMessage(`Error adding score: ${error.message}`);
    saveToStorage({ name, score });
  }
};

export default addScore;
