// script.js

const quizData = [
    {
        question: "Qual é a capital da França?",
        options: ["Paris", "Londres", "Berlim", "Madri"],
        answer: "Paris"
    },
    {
        question: "Qual é o maior planeta do sistema solar?",
        options: ["Terra", "Marte", "Júpiter", "Saturno"],
        answer: "Júpiter"
    },
    {
        question: "Qual é o elemento químico com símbolo Au?",
        options: ["Prata", "Ouro", "Cobre", "Ferro"],
        answer: "Ouro"
    },
    // Adicione mais perguntas conforme necessário
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const questionData = quizData[currentQuestionIndex];
    document.getElementById('question').textContent = questionData.question;
    const answersElement = document.getElementById('answers');
    answersElement.innerHTML = '';

    questionData.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.addEventListener('click', () => checkAnswer(option, button));
        answersElement.appendChild(button);
    });
}

function checkAnswer(selectedOption, selectedButton) {
    const questionData = quizData[currentQuestionIndex];
    const buttons = document.querySelectorAll('#answers button');

    buttons.forEach(button => {
        button.disabled = true;
        if (button.textContent === questionData.answer) {
            button.classList.add('correct');
        } else if (button.textContent === selectedOption) {
            button.classList.add('incorrect');
        }
    });

    if (selectedOption === questionData.answer) {
        score++;
        setTimeout(() => {
            nextQuestion();
        }, 1000); // Avança para a próxima pergunta após 1 segundo
    } else {
        document.getElementById('next-button').disabled = false;
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
        document.getElementById('next-button').disabled = true;
    } else {
        showResult();
    }
}

function showResult() {
    const resultElement = document.getElementById('result');
    resultElement.textContent = `Você acertou ${score} de ${quizData.length} perguntas!`;
    resultElement.classList.remove('hidden');
    document.getElementById('quiz').classList.add('hidden');
    document.getElementById('next-button').classList.add('hidden');
}

document.getElementById('next-button').addEventListener('click', () => {
    nextQuestion();
});

// Carrega a primeira pergunta
loadQuestion();
