import '../styles/index.scss';

if (process.env.NODE_ENV === 'development') {
  require('../index.html');
}

console.log('NGINX beautifier');
