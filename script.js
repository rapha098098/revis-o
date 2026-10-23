// 1 — Diferença entre texto (string) e número
let numero = "50";
let real_numero = 50;

console.log(real_numero + 5); // 55
console.log(numero + 5);      // "505"
// Com aspas, o número é tratado como texto (string).

// 2 — Operador ternário
let idade = 17;
let status = idade >= 18 ? "Maior de idade" : "Menor de idade";
console.log(status);

// 3 — Tabuada do 8
for (let i = 1; i <= 10; i++) {
    console.log(`8 x ${i} = ${8 * i}`);
}

// 4 — Lista com métodos de array
let lista = ["Banana", "Maçã"];
lista.unshift("Maçã");
lista.pop();
lista.push("Melão");
console.log(lista);

// 5 — Arrow function
const somar = (a, b) => a + b;
console.log("Soma:", somar(10, 5));

// 6 — Filter
const notas = [4, 7, 9, 3, 8];
const aprovados = notas.filter(nota => nota >= 7);
console.log("Notas aprovadas:", aprovados);

// 7 — Somar strings concatena textos
let valor1 = "10";
let valor2 = "5";
console.log(valor1 + valor2); // "105"

// 8 — Selecionar e pintar todos os parágrafos
document.querySelectorAll(".paragrafo").forEach(p => {
    p.style.color = "red";
});

// 9 — Evento de clique para calcular a soma
const btnSoma = document.getElementById("btnSoma");
const resultado = document.getElementById("resultado");

function calcular() {
    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);
    resultado.innerText = `Soma: ${somar(num1, num2)}`;

    // 10 — Verificar se é possível dividir
    if (num2 === 0) {
        alert("Não é possível dividir por zero!");
        console.log("Não é possível dividir por zero!");
    } else {
        let resultadoDivisao = num1 / num2;
        console.log("Divisão:", resultadoDivisao);
    }
}

btnSoma.addEventListener("click", calcular);
