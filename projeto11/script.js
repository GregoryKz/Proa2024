// script.js
function checkAnswer() {
    const answer = document.getElementById("answer").value.toLowerCase();
    const result = document.getElementById("result");

    if (answer === "alho") {
        result.textContent = "Parabéns! Você acertou!";
        result.style.color = "green";
    } else {
        result.textContent = "Resposta errada! Tente novamente.";
        result.style.color = "red";
    }
}
