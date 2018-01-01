require('./sass/main.scss')
const test = require('./test.js');

document.getElementById('version').innerHTML += VERSION;


if (!PRODUCTION)
alert('Development Version')