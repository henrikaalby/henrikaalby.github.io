window.addEventListener('load', init);

// Globale

// Vanskelighetsgrader
const levels = {
  easy: 5,
  medium: 3,
  hard: 1
};

// Endring av vanskelighetsgrad
const currentLevel = levels.easy;

let time = currentLevel;
let score = 0;
let isPlaying;

// DOM Elementer
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');
const video = document.getElementById("videosnutt");

const words = [
  'hatt',
  'elv',
  'heldig',
  'statu',
  'generere',
  'thor',
  'html',
  'flyplass',
  'vits',
  'utvikler',
  'boksamling',
  'superhelt',
  'javascript',
  'ernæring',
  'pistol',
  'ekko',
  'søsken',
  'arrestere',
  'ufyselig',
  'syntom',
  'latter',
  'magi',
  'mester',
  'space',
  'definisjon'
];

// Start av spillet
function init() {
  // Vis antall senkunder
  seconds.innerHTML = currentLevel;
  // Load word from array
  showWord(words);
  // Start spillet når et ord er skrevet inn
  wordInput.addEventListener('input', startMatch);
  // Call countdown for hvert sekund, slik at bruker ser
  setInterval(countdown, 1000);
  // Sjekke status på spillet
  setInterval(checkStatus, 50);
}

// Start spill
function startMatch() {
  if (matchWords()) {
    isPlaying = true;
    time = currentLevel + 1;
    showWord(words);
    wordInput.value = '';
    score++;
  }

  // Dersom score = -1 , vis 0
  if (score === -1) {
    scoreDisplay.innerHTML = 0;
  } else {
    scoreDisplay.innerHTML = score;
  }
}

// Matche currentWord med wordInput
function matchWords() {
  if (wordInput.value === currentWord.innerHTML) {
    message.innerHTML = 'Correct!!!';
    video10();
    return true;
  } else {
    message.innerHTML = '';
    return false;
  }
}

// Velg og vis random ord
function showWord(words) {
  // Generere random array index
  const randIndex = Math.floor(Math.random() * words.length);
  // Skriv ut random ord
  currentWord.innerHTML = words[randIndex];
}

// Nedtelling
function countdown() {
  // Make sure time is not run out
  if (time > 0) {
    // Decrement
    time--;
  } else if (time === 0) {
    // Game is over
    isPlaying = false;
  }
  // Vis tid
  timeDisplay.innerHTML = time;
}

// Spille av video når poeng er 10
function video10() {
  if (score > 10) {
    video.play();
  }
}


// Check game status
function checkStatus() {
  if (!isPlaying && time === 0) {
    message.innerHTML = 'Game Over!!!';
    score = -1;
  }
}
