import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import vacheTaurau from './modules/vacheTaurau.js';

const submit = document.querySelector('.submit');
const resultat = document.querySelector('.result');
const alert = document.querySelector('.alert');
const preview = document.querySelector('.preview ul')

const getHand = () => {
  const nb = document.querySelector('.nombre1').value;
  return nb.split('')
}

const deleteHand = () => {
  const nb1 = document.querySelector('.nombre1').value = "";
}

submit.addEventListener('click', (e) => {
  e.preventDefault()
    const userHand = getHand()
    console.log(userHand)
    const result = vacheTaurau(userHand)
    alert.style.display = "block";
    resultat.innerHTML = "";
    resultat.innerHTML = result;
    const li = document.createElement('li')
    li.innerHTML = userHand + " - " + result
    preview.appendChild(li)
    deleteHand()
})
