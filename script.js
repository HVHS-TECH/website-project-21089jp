/***********************************************
* script.js
* JavaScript for one-page CV website
* Made by Jayden Pressley
***********************************************/

console.log('script.js is running...\nEnable smooth scrolling in "chrome://flags"');

function copyEmail() {
  const email = 'pressleyjayden7@gmail.com';
  navigator.clipboard.writeText(email).then(() => console.log('Email copied.'));
  console.log(email)
}

