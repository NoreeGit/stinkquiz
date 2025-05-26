/* js/quiz.js */
let currentQuestionIndex = 0;
let score = 0;
let selectedQuestions = [];

const questionContainer = document.getElementById('question-container');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const scoreDisplay = document.getElementById('score-display');

function startQuiz() {
  selectedQuestions = [...questions].sort(() => Math.random() - 0.5).slice(0, 5);
  currentQuestionIndex = 0;
  score = 0;
  showQuestion();
}

function showQuestion() {
  resetState();
  const q = selectedQuestions[currentQuestionIndex];
  const progress = document.createElement('p');
  progress.innerText = `Question ${currentQuestionIndex + 1} of 5`;
  const questionEl = document.createElement('h2');
  questionEl.innerText = q.question;
  questionContainer.innerHTML = '';
  questionContainer.appendChild(progress);
  questionContainer.appendChild(questionEl);
  scoreDisplay.innerText = `Score: ${score}`;

  q.answers.forEach((text, index) => {
    const btn = document.createElement('button');
    btn.innerText = text;
    btn.classList.add('btn');
    btn.addEventListener('click', () => selectAnswer(index === q.correct));
    answerButtons.appendChild(btn);
  });
}

function resetState() {
  nextButton.style.display = 'none';
  answerButtons.innerHTML = '';
}

function selectAnswer(correct) {
  if (correct) score++;
  nextButton.style.display = 'inline-block';
}

nextButton.addEventListener('click', () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < selectedQuestions.length) {
    showQuestion();
  } else {
    localStorage.setItem('quizScore', score);
    window.location.href = 'results.html';
  }
});

startQuiz();
