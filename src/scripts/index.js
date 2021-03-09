import Beautify from 'nginxbeautify';
import '../styles/index.scss';

if (process.env.NODE_ENV === 'development') {
  require('../index.html');
}

const beautifier = new Beautify({ spaces: 2 });
const textarea = document.getElementById('textarea');
const form = document.getElementById('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  textarea.value = beautifier.parse(textarea.value);
  return false;
});