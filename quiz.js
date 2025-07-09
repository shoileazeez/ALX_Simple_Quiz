function checkAnswer() {
    const correctAnswer = "4";
    const selectedRadio = document.querySelector('input[name="quiz"]:checked');
    const feedbackElement = document.getElementById("feedback");
    if (!selectedRadio) {
        feedbackElement.textContent = "Please select an answer first.";
        feedbackElement.className = "incorrect-answer";
        return;
    }
    const userAnswer = selectedRadio.value;
    if (userAnswer === correctAnswer) {
        feedbackElement.textContent = "Correct! Well done.";
        feedbackElement.className = "correct";
    } else {
        feedbackElement.textContent = "That's incorrect. Try again!";

    }
}

// Add event listener to the submit button
const submitBtn = document.getElementById("submit-answer");
if (submitBtn) {
    submitBtn.addEventListener("click", checkAnswer);
}