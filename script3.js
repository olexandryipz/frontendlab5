let score = 0;
let totalQuestions = 0;
let correctAnswerIndex;
let correctAnswer;
let isAnswerSubmitted = false;

function updateScoreDisplay() {
    const percentage = totalQuestions > 0 ? Math.round((score / totalQuestions) * 100) : 0;
    document.getElementById('correctAnswers').textContent = score;
    document.getElementById('totalQuestions').textContent = totalQuestions;
    document.getElementById('percentage').textContent = `${percentage}%`;
}

function generateQuestion() {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    correctAnswer = num1 * num2;

    const wrongAnswers = Array.from({ length: 3 }, () => {
        let wrong;
        do {
            wrong = correctAnswer + (Math.floor(Math.random() * 10) - 5);
        } while (wrong === correctAnswer || wrong <= 0);
        return wrong;
    });

    const answers = [...wrongAnswers, correctAnswer].sort(() => Math.random() - 0.5);
    correctAnswerIndex = answers.indexOf(correctAnswer);

    document.getElementById('question').textContent = `${num1} * ${num2} = ?`;
    document.querySelectorAll('.option').forEach((option, index) => {
        option.textContent = answers[index];
        option.previousElementSibling.value = index;
        option.previousElementSibling.checked = false;
    });

    document.getElementById('result').textContent = '';
    isAnswerSubmitted = false;

    totalQuestions++;
    updateScoreDisplay();
}

function checkAnswer() {
    if (isAnswerSubmitted) return;

    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (selectedAnswer) {
        isAnswerSubmitted = true;
        const answerIndex = parseInt(selectedAnswer.value, 10);

        if (answerIndex === correctAnswerIndex) {
            document.getElementById('result').textContent = 'Правильно!';
            score++;
        } else {
            document.getElementById('result').textContent = `Помилка, правильна відповідь: ${correctAnswer}`;
        }

        updateScoreDisplay();
    } else {
        document.getElementById('result').textContent = 'Будь ласка, виберіть відповідь перед продовженням.';
    }
}

document.querySelectorAll('input[name="answer"]').forEach(input => {
    input.addEventListener('change', checkAnswer);
});

document.getElementById('nextQuestion').addEventListener('click', generateQuestion);

generateQuestion();
