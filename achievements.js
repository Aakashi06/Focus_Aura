// achievements.js

document.addEventListener("DOMContentLoaded", () => {
  // Achievements data
  const achievements = [
    { id: "gettingStarted", name: "Getting Started", goal: 1 },
    { id: "dailyWarrior", name: "Daily Warrior", goal: 4 },
    { id: "weekWarrior", name: "Week Warrior", goal: 7 },
    { id: "focusMaster", name: "Focus Master", goal: 100 },
    { id: "timeLord", name: "Time Lord", goal: 180000 }
  ];

  // Load progress from localStorage or set to 0
  achievements.forEach(a => {
    const savedProgress = localStorage.getItem(`achievement-${a.id}`);
    a.progress = savedProgress ? parseInt(savedProgress, 10) : 0;
  });

  // Update UI
  achievements.forEach(a => {
    const card = document.getElementById(a.id);
    const progressEl = card.querySelector(".progress");
    const countEl = card.querySelector(".count");

    const percentage = Math.min((a.progress / a.goal) * 100, 100);
    progressEl.style.width = `${percentage}%`;
    countEl.textContent = `${a.progress} / ${a.goal}`;

    if (a.progress >= a.goal) {
      card.classList.add("completed");
    }
  });

  // Demo: Increment progress on card click
  document.querySelectorAll(".achievement-card").forEach(card => {
    card.addEventListener("click", () => {
      const id = card.id;
      const achievement = achievements.find(a => a.id === id);

      if (achievement.progress < achievement.goal) {
        achievement.progress++;
        localStorage.setItem(`achievement-${id}`, achievement.progress);

        // Update UI
        const percentage = Math.min((achievement.progress / achievement.goal) * 100, 100);
        card.querySelector(".progress").style.width = `${percentage}%`;
        card.querySelector(".count").textContent = `${achievement.progress} / ${achievement.goal}`;

        if (achievement.progress >= achievement.goal) {
          card.classList.add("completed");
        }
      }
    });
  });
});
