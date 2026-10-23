// Revisão JavaScript — Módulo 1: Fundamentos e Lógica

// Exercício 1 — Calculadora de média
function calcularMedia(nota1, nota2, nota3) {
  return (nota1 + nota2 + nota3) / 3;
}
const media = calcularMedia(8, 7, 9);
console.log("Exercício 1 — Média:", media);
if (media >= 7) {
  console.log("Aprovado");
} else {
  console.log("Reprovado");
}

// Exercício 2 — Verificador de tipo
function verificarTipo(valor) {
  console.log("A variável é do tipo " + typeof valor);
}
console.log("Exercício 2:");
verificarTipo("Olá");
verificarTipo(10);
verificarTipo(true);

// Exercício 3 — Operador ternário
const idade = 17;
const status = idade >= 18 ? "Maior de idade" : "Menor de idade";
console.log("Exercício 3:", status);

// Exercício 4 — Tabuada com for
const numeroTabuada = 7;
console.log("Exercício 4 — Tabuada:");
for (let i = 1; i <= 10; i++) {
  console.log(`${numeroTabuada} x ${i} = ${numeroTabuada * i}`);
}

// Exercício 5 — Dia da semana com switch
const diaSemana = 3;
console.log("Exercício 5:");
switch (diaSemana) {
  case 1: console.log("Domingo"); break;
  case 2: console.log("Segunda"); break;
  case 3: console.log("Terça"); break;
  case 4: console.log("Quarta"); break;
  case 5: console.log("Quinta"); break;
  case 6: console.log("Sexta"); break;
  case 7: console.log("Sábado"); break;
  default: console.log("Dia inválido");
}

// Módulo 2: Funções e Arrays

// Exercício 6 — Arrow function para área de retângulo
const calcularArea = (base, altura) => base * altura;
console.log("Exercício 6 — Área:", calcularArea(5, 10));

// Exercício 7 — Lista de compras
const listaDeCompras = ["Arroz", "Feijão", "Batata"];
listaDeCompras.push("Macarrão");
listaDeCompras.unshift("Suco");
listaDeCompras.pop();
console.log("Exercício 7 — Lista final:", listaDeCompras);

// Exercício 8 — filter, map, reduce e find
const alunos = [
  { nome: "Ana", nota: 8.5, idade: 20 },
  { nome: "João", nota: 6.7, idade: 22 },
  { nome: "Maria", nota: 9.3, idade: 19 },
  { nome: "Carlos", nota: 5.0, idade: 21 },
  { nome: "Beatriz", nota: 7.8, idade: 20 }
];
const aprovados = alunos.filter(aluno => aluno.nota >= 7);
const nomesAlunos = alunos.map(aluno => aluno.nome);
const somaIdades = alunos.reduce((soma, aluno) => soma + aluno.idade, 0);
const mediaIdade = somaIdades / alunos.length;
const alunoEncontrado = alunos.find(aluno => aluno.nota < 6);
console.log("Exercício 8 — Aprovados:", aprovados);
console.log("Exercício 8 — Nomes:", nomesAlunos);
console.log("Exercício 8 — Soma das idades:", somaIdades);
console.log("Exercício 8 — Média das idades:", mediaIdade);
console.log("Exercício 8 — Primeiro aluno com nota menor que 6:", alunoEncontrado);

// Módulo 3: DOM e Interação

// Exercício 9 — Mudar título
const titulo = document.getElementById("titulo");
const btnMudar = document.getElementById("btnMudar");
btnMudar.addEventListener("click", function () {
  titulo.innerText = "Título Alterado com Sucesso!";
});

// Exercício 10 — Contador
let contagem = 0;
const contador = document.getElementById("contador");
const btnIncrementar = document.getElementById("btnIncrementar");
btnIncrementar.addEventListener("click", function () {
  contagem++;
  contador.innerText = contagem;
});

// Exercício 11 — Selecionar e destacar parágrafos
const paragrafos = document.querySelectorAll(".paragrafo");
const btnDestacar = document.getElementById("btnDestacar");
btnDestacar.addEventListener("click", function () {
  paragrafos.forEach(function (paragrafo) {
    paragrafo.classList.add("destaque");
  });
});

// Exercício 12 — Espelho de digitação
const campoInput = document.getElementById("campoInput");
const textoRefletido = document.getElementById("textoRefletido");
campoInput.addEventListener("input", function () {
  textoRefletido.innerText = campoInput.value;
});

// Desafio Final: Calculadora com DOM
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const btnSoma = document.getElementById("btnSoma");
const btnSub = document.getElementById("btnSub");
const btnMulti = document.getElementById("btnMulti");
const btnDiv = document.getElementById("btnDiv");
const resultado = document.getElementById("resultado");

function somar(a, b) { return a + b; }
function subtrair(a, b) { return a - b; }
function multiplicar(a, b) { return a * b; }
function dividir(a, b) { return a / b; }

// Converte os textos dos inputs em números
function calcular() {
  const valor1 = Number(num1.value);
  const valor2 = Number(num2.value);
  return [valor1, valor2];
}

btnSoma.addEventListener("click", function () {
  const [a, b] = calcular();
  resultado.innerText = somar(a, b);
});
btnSub.addEventListener("click", function () {
  const [a, b] = calcular();
  resultado.innerText = subtrair(a, b);
});
btnMulti.addEventListener("click", function () {
  const [a, b] = calcular();
  resultado.innerText = multiplicar(a, b);
});
btnDiv.addEventListener("click", function () {
  const [a, b] = calcular();
  if (b === 0) {
    resultado.innerText = "Não se divide por 0";
  } else {
    resultado.innerText = dividir(a, b);
  }
});
