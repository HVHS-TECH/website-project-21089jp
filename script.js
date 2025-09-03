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

 function downloadCV() {
    console.log('Downloading CV');
  const link = document.createElement('a');
  link.href = 'images/JaydenPressleyMiniCV.pdf';  
  link.download = 'JaydenPressleyCV';
  link.click();
  
  console.log(link.download)
}

