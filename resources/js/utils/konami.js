// konami.js

/* 
usage: 
import { onKonamiCode } from './utils/konami';
onKonamiCode(() => { //do something });
*/


// Define the Konami code sequence as an array of key codes
const konamiCode = [
  'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
  'b', 'a'
];

// Initialize a variable to keep track of the user's input
let userInput = [];

// Function to check if the Konami code has been entered
function checkKonamiCode() {
  for (let i = 0; i < userInput.length; i++) {
    if (userInput[i] !== konamiCode[i]) {
      return false;
    }
  }
  return true;
}

// Define a variable to hold the user-defined callback function
let onKonamiCodeEnteredCallback = null;

// Function to set the user-defined callback function
function onKonamiCode(callback) {
  onKonamiCodeEnteredCallback = callback;
}

// Event listener to capture key presses
document.addEventListener('keydown', (event) => {
  // Log the current keys
  userInput.push(event.key);

  // Show userInput array
  console.log(userInput);

  // Ensure userInput array does not exceed the length of the konamiCode array
  while (userInput.length > konamiCode.length) {
    userInput.shift();
  }

  if (checkKonamiCode()) {
    // Does the userInput array match the konamiCode array?
    if (userInput.toString() === konamiCode.toString()) {
      onKonamiCodeEnteredCallback(); // Call the user-defined callback function
      // Reset userInput array back to empty
      userInput = [];
    }
  } else {
    // Reset userInput array if the pattern doesn't match
    userInput = [];
  }
});

// Export the onKonamiCode function to allow users to set their own callback
export { onKonamiCode };
