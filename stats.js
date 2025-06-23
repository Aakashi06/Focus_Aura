// stats.js

// Dummy data - in real use, fetch from localStorage or server
const stats = {
  totalFocusTime: 1250, // in minutes
  totalSessions: 50,
  currentStreak: 7,
  weeklyProgress: 70, // percent
  allTimeRecords: "Longest Session: 120 mins",
  todayBreakdown: {
    focus: 90,
    shortBreaks: 3,
    longBreaks: 1
  }
};

// Fill stats dynamically
document.getElementById("total-focus-time").textContent = `${stats.totalFocusTime} mins`;
document.getElementById("total-sessions").textContent = stats.totalSessions;
document.getElementById("current-streak").textContent = `${stats.currentStreak} days`;
document.getElementById("weekly-progress").style.width = `${stats.weeklyProgress}%`;
document.getElementById("all-time-records").textContent = stats.allTimeRecords;

const breakdown = document.getElementById("today-breakdown");
breakdown.innerHTML = `
  <li>Focus: ${stats.todayBreakdown.focus} mins</li>
  <li>Short Breaks: ${stats.todayBreakdown.shortBreaks}</li>
  <li>Long Breaks: ${stats.todayBreakdown.longBreaks}</li>
`;

