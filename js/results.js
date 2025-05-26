/* js/results.js */
const container = document.getElementById('results-summary');
const scoreValue = parseInt(localStorage.getItem('quizScore'));

let resultText = "";
if (scoreValue <= 1) {
  resultText = "🌸 You're squeaky clean! Are you even human?";
} else if (scoreValue <= 3) {
  resultText = "😅 Mild funk detected. Keep an eye on your armpits.";
} else if (scoreValue === 4) {
  resultText = "🦨 You're officially stinky. Febreze won't save you now.";
} else {
  resultText = "💀 You are the Stinkmaster Supreme. Legend says plants wilt in your presence.";
}

container.innerHTML = `<p>You scored ${scoreValue}/5</p><p>${resultText}</p>`;
