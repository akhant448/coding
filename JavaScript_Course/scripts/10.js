const buttonElement = document.querySelector('.js-button');
const x = buttonElement.classList.contains('js-button');

console.log(x);
function toggleGamingButton () {
  const gamingButtonElement = document.querySelector('.js-gaming-button');

  if (!gamingButtonElement.classList.contains('is-gaming-button')) {
    gamingButtonElement.classList.add('is-gaming-button')
  } else {
    gamingButtonElement.classList.remove('is-gaming-button')
  }
}

function toggleGamingButton2 () {
  const gamingButtonElement = document.querySelector('.js-gaming-button-2');

  if (!gamingButtonElement.classList.contains('is-gaming-button')) {
    gamingButtonElement.classList.add('is-gaming-button')
  } else {
    gamingButtonElement.classList.remove('is-gaming-button')
  }
}

function toggleGamingButton3 () {
  const gamingButtonElement = document.querySelector('.js-gaming-button-3');

  if (!gamingButtonElement.classList.contains('is-gaming-button')) {
    gamingButtonElement.classList.add('is-gaming-button')
  } else {
    gamingButtonElement.classList.remove('is-gaming-button')
  }
}