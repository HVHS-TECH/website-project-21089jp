/***********************************************
 * script.js
 * JavaScript for one-page CV website
 * Made by Jayden Pressley
 ***********************************************/

console.log(
  'script.js is running...\nEnable smooth scrolling in "chrome://flags"'
);

/***********************************************
 * copyEmail
 * Copies text to clipboard, console logs it
 ***********************************************/
function copyEmail() {
  const email = "pressleyjayden7@gmail.com";
  navigator.clipboard.writeText(email).then(() => console.log("Email copied."));
  console.log(email);
}

/***********************************************
 * donwloadCV
 * Takes file from images folder
 * Downloads it via link
 ***********************************************/
function downloadCV() {
  console.log("Downloading CV");
  const link = document.createElement("a");
  link.href = "images/JaydenPressleyMiniCV.pdf";
  link.download = "JaydenPressleyCV";
  link.click();

  console.log(link.download);
}
