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
    const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/zKoPy5dluJN9ghN7v3i1/scores/');

    if (response.ok) {
      const data = await response.json();
      const scores = data.result;
      const storedData = getFromStorage();
      const newScores = storedData.filter((storedScore) => (
        !scores.some((score) => (
          score.user === storedScore.name && score.score === storedScore.score
        ))
      ));

      if (newScores.length > 0) {
        const syncResponse = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/zKoPy5dluJN9ghN7v3i1/scores/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newScores),
        });

        if (syncResponse.ok) {
          const updatedStoredData = storedData.filter((storedScore) => (
            !newScores.some((score) => (
              score.name === storedScore.name && score.score === storedScore.score
            ))
          ));
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
