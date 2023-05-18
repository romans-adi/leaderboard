const renderScores = (scores, scoresList) => {
  scoresList.innerHTML = '';
  scores.forEach((score) => {
    const player = document.createElement('li');
    player.classList.add('py-2', 'px-4');
    player.append(document.createTextNode(`${score.user} : ${score.score}`));
    scoresList.append(player);
  });
};

export default renderScores;
