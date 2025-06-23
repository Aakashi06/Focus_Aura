// script.js

// Timer Variables
let timer;
let timeLeft = 1500; // default 25 mins
let isRunning = false;

// Get DOM elements
const timerDisplay = document.getElementById("timer");
const startBtn = document.querySelector(".controls .control-btn:nth-child(1)");
const resetBtn = document.querySelector(".controls .control-btn:nth-child(2)");

// Mode Buttons (updated to remove customize)
const shortBreakBtn = document.querySelector(".mode-btn:nth-child(1)");
const longBreakBtn = document.querySelector(".mode-btn:nth-child(2)");

// Navbar Buttons (if you have these IDs in HTML)
const statsBtn = document.getElementById("stats-btn");
const achievementsBtn = document.getElementById("achievements-btn");
const focusBtn = document.getElementById("focus-btn");

// Timer Display Update
function updateDisplay() {
  const minutes = String(Math.floor(timeLeft / 60)).padStart(2, '0');
  const seconds = String(timeLeft % 60).padStart(2, '0');
  timerDisplay.textContent = `${minutes}:${seconds}`;
}

// Start / Pause Timer
function startTimer() {
  if (!isRunning) {
    isRunning = true;
    timer = setInterval(() => {
      if (timeLeft > 0) {
        timeLeft--;
        updateDisplay();
      } else {
        clearInterval(timer);
        isRunning = false;
        alert("Time's up!");
      }
    }, 1000);
    startBtn.textContent = "Pause";
  } else {
    clearInterval(timer);
    isRunning = false;
    startBtn.textContent = "Start";
  }
}

// Reset Timer
function resetTimer() {
  clearInterval(timer);
  timeLeft = 1500; // reset to default
  isRunning = false;
  startBtn.textContent = "Start";
  updateDisplay();
}

// Short Break
function shortBreak() {
  clearInterval(timer);
  timeLeft = 5 * 60; // 5 mins
  isRunning = false;
  startBtn.textContent = "Start";
  updateDisplay();
}

// Long Break
function longBreak() {
  clearInterval(timer);
  timeLeft = 15 * 60; // 15 mins
  isRunning = false;
  startBtn.textContent = "Start";
  updateDisplay();
}

// Navbar Navigation (if you’re using these buttons)
if (statsBtn) {
  statsBtn.addEventListener("click", () => {
    window.location.href = "stats.html";
  });
}

if (achievementsBtn) {
  achievementsBtn.addEventListener("click", () => {
    window.location.href = "achievements.html";
  });
}

if (focusBtn) {
  focusBtn.addEventListener("click", () => {
    window.location.href = "index.html";
  });
}

// Initial Display
updateDisplay();

// Button Event Listeners
startBtn.addEventListener("click", startTimer);
resetBtn.addEventListener("click", resetTimer);
shortBreakBtn.addEventListener("click", shortBreak);
longBreakBtn.addEventListener("click", longBreak);
