function checkAnswer(button) {
  const correctAnswer = "Protect Plus";
  const result = document.getElementById("quiz-result");

  if (button.textContent === correctAnswer) {
    result.textContent = "Correct! Protect Plus provides global coverage.";
    result.style.color = "green";
  } else {
    result.textContent = "Oops! Try again.";
    result.style.color = "red";
  }
}