export const getFromStorage = () => {
  const storedData = localStorage.getItem('scores');
  return storedData ? JSON.parse(storedData) : [];
};

export const saveToStorage = (score) => {
  const storedData = getFromStorage() || [];
  storedData.push(score);
  localStorage.setItem('scores', JSON.stringify(storedData));
};

export const syncData = async () => {
  try {
    const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/MfoLYZGPReGfyuYdGRJ7/scores/');

    if (response.ok) {
      const data = await response.json();
      const scores = data.result;
      const storedData = getFromStorage();
      const newScores = scores.filter((score) => !storedData.some((storedScore) => storedScore.user === score.user)); // eslint-disable-line
      if (newScores.length > 0) {
        const syncResponse = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/MfoLYZGPReGfyuYdGRJ7/scores/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newScores),
        });
        if (syncResponse.ok) {
          const updatedStoredData = storedData.filter((storedScore) => !newScores.some((newScore) => newScore.user === storedScore.user)); // eslint-disable-line
          saveToStorage(updatedStoredData);
        } else {
          throw new Error('Failed to sync scores to the server.');
        }
      }
      return scores;
    }
    const storedData = getFromStorage();
    return storedData;
  } catch (error) {
    const storedData = getFromStorage();
    return storedData;
  }
};
