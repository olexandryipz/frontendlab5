let score = 0;
let totalQuestions = 0;
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

    document.getElementById('question').textContent = `${num1} * ${num2} = ?`;
    document.getElementById('result').textContent = '';
    document.getElementById('userAnswer').value = '';
    isAnswerSubmitted = false;

    totalQuestions++;
    updateScoreDisplay();
}

function checkAnswer() {
    if (isAnswerSubmitted) return;

    const userAnswer = document.getElementById('userAnswer').value.trim();

    if (userAnswer !== '' && !isNaN(userAnswer)) {
        isAnswerSubmitted = true;

        if (parseInt(userAnswer, 10) === correctAnswer) {
            document.getElementById('result').textContent = 'Правильно!';
            score++;
        } else {
            document.getElementById('result').textContent = `Помилка, правильна відповідь: ${correctAnswer}`;
        }

        updateScoreDisplay();
    } else {
        document.getElementById('result').textContent = 'Будь ласка, введіть числову відповідь.';
    }
}

document.getElementById('checkAnswer').addEventListener('click', checkAnswer);
document.getElementById('nextQuestion').addEventListener('click', generateQuestion);

generateQuestion();
