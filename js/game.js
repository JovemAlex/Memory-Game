const grid = document.querySelector('.grid');
const foto = [
  'beth',
  'jerry',
  'jessica',
  'morty',
  'pessoa-passaro',
  'rick',
  'summer',
  'meeseeks',
  'scroopy',
  'pickle-rick'
]
const createElement = (tag, className) => {
  const element = document.createElement(tag);
  element.className = className;
  return element;
}

let firstCard = '';
let secondCard = '';

const endGame = () => {
  const disableCards = document.querySelectorAll('.disable-card'); 
  if(disableCards.length === 20) {
    alert('Parabéns, você Ganhou o jogo!');
  }
}

const checkCards = () => {
  const firstCharacter = firstCard.getAttribute('data-character');
  const secondCharacter = secondCard.getAttribute('data-character');

  if (firstCharacter === secondCharacter) {

    firstCard.firstChild.classList.add('disable-card');
    secondCard.firstChild.classList.add('disable-card');

    firstCard = '';
    secondCard = '';

    endGame();

  } else {
    setTimeout(() => {

      firstCard.classList.remove('reveal-card');
      secondCard.classList.remove('reveal-card');

      firstCard = '';
      secondCard = '';

    }, 500);
  }
}

const revealCard = ({target}) => {
  if(target.parentNode.className.includes('reveal-card')) {
    return;
  }
  if(firstCard === '') {

    target.parentNode.classList.add('reveal-card');
    firstCard = target.parentNode;

  } else if (secondCard === '') {

    target.parentNode.classList.add('reveal-card');
    secondCard = target.parentNode;
    
    checkCards();
  }
  
}

const createCard = (personagem) => {

  const card = createElement('div', 'card');
  const front = createElement('div', 'face front');
  const back = createElement('div', 'face back');

  front.style.backgroundImage = `url('../images/${personagem}.png')`;

  card.appendChild(front);
  card.appendChild(back);

  card.addEventListener('click', revealCard);

  card.setAttribute('data-character', personagem)


  return card;
}

const loadGame = () => {
  const duplicateCharactrs = [ ...foto, ...foto ];

  const shuffledArray = duplicateCharactrs.sort(() => Math.random() - 0.5);
  shuffledArray.forEach((personagem) => {
    const card = createCard(personagem);
    grid.appendChild(card);
  });

}

loadGame();