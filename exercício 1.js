const numeroSecreto = Math.floor(Math.random() * 20) + 1;
let palpite = 0;

while (palpite !== numeroSecreto) {
    palpite = parseInt(prompt("Adivinhe o número (1 a 20):"));
    if (palpite > numeroSecreto) {
        alert("Muito alto!");
    } else if (palpite < numeroSecreto) {
        alert("Muito baixo!");
    } else {
        alert("Parabéns! Você acertou!");
    }
}