const login = document.querySelector('.login_input');
const btn = document.querySelector('.login_button');


const minName = ({target}) => {
  if(target.value.length >= 3) {
    btn.disabled = false;
    return;
  } btn.disabled = true;
}

const submitRedirect = (event) => {
  event.preventDefault();
  localStorage.setItem('player', login.value);
  window.location = 'pages/game.html';
} 

login.addEventListener('input', minName);
btn.addEventListener('click', submitRedirect);