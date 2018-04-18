// change require to es6 import style
// import $ from 'jquery';

import './styles.scss';

// initialize variables and get first h1 tag which is time stamp
const h1 = document.getElementsByTagName('h1')[0];

let seconds = 0;


function add() {
  seconds += 1;
  h1.textContent = `you've been on this website for this many seconds: ${
    seconds > 9 ? seconds : `0${seconds}`}`;
  setTimeout(add, 1000);
}

function timer() {
  setTimeout(add, 1000);
}
timer();
