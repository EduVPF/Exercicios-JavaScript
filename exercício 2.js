const opcoes = ["pedra", "papel", "tesoura"];
const escolhaUsuario = prompt("Pedra, papel ou tesoura?").toLowerCase();
const escolhaComputador = opcoes[Math.floor(Math.random() * 3)];

console.log(`Você: ${escolhaUsuario} | PC: ${escolhaComputador}`);

if (escolhaUsuario === escolhaComputador) {
    console.log("Empate!");
} else if (
    (escolhaUsuario === "pedra" && escolhaComputador === "tesoura") ||
    (escolhaUsuario === "papel" && escolhaComputador === "pedra") ||
    (escolhaUsuario === "tesoura" && escolhaComputador === "papel")
) {
    console.log("Venceu!");
} else {
    console.log("Perdeu!");
}