const renderScores = (scores, scoresList) => {
  scoresList.innerHTML = '';
  const addScroll = scores.length > 10;

  scores.forEach((score, index) => {
    const player = document.createElement('li');
    player.className = 'py-2 px-4 items-center flex justify-between border border-b border-black p-4';

    const position = document.createElement('span');
    position.className = 'mr-2 bg-transparent border border-white p-4';
    position.textContent = index + 1;

    const name = document.createElement('span');
    name.className = 'flex-grow';
    name.textContent = score.user;

    const scoreValue = document.createElement('span');
    scoreValue.className = 'float-right';
    scoreValue.textContent = score.score;

    player.append(position, name, scoreValue);
    scoresList.appendChild(player);
  });

  scoresList.style.height = addScroll ? '300px' : 'auto';
  scoresList.style.overflowY = addScroll ? 'auto' : 'visible';
};

export default renderScores;
