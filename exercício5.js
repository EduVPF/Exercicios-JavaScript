const n = parseInt(prompt("Quantidade de termos:"));
let termo = "";
let soma = 0;
let lista = [];

for (let i = 1; i <= n; i++) {
    termo += "1";
    let valor = parseInt(termo);
    lista.push(valor);
    soma += valor;
}

console.log(lista.join(" + "));
console.log(`A soma é: ${soma}`);