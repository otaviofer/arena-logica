/** Programa simulador de corrida com Node.js */

const prompt = require("prompt-sync")();

// --- Configurações Iniciais ---
// const clima = "chuvoso"; 
// const pneu = "macio";
let posicaoKM = 0;       // Onde o carro está na pista
// const meta = 50;         // Tamanho da pista
let turnos = 0;

console.log(`\n🏁 Bem-Vindo ao Simulador de Corrida Js!\n`);
console.log(`\n******* 🏎️🏎️🏎️🏎️🏎️🏎️🏎️🏎️🏎️🏎️ *******\n`);

const escolha = prompt(" Para começar escolha o clima: (1-Sol, 2-Chuva, 3-Tempestade): ");
let clima; // Esta variável será usada pelos seus IFs lá embaixo

switch (escolha) {
    case "1":
        clima = "ensolarado";
        break;
    case "2":
        clima = "chuvoso";
        break;
    case "3":
        clima = "tempestade";
        break;
    default:
        clima = "ensolarado"; // Um valor padrão caso o usuário erre
        console.log("Opção inválida! Definindo clima como ensolarado por padrão.");
}

const escolha2 = prompt("\nEscolha o tipo do pneu: (1-Macio, 2-Duro): \n");
let pneu;

switch (escolha2) {
    case "1":
        pneu = "macio";
        break;
    case "2":
        pneu = "duro";
        break;
    default:
        pneu = "duro";
        console.log("Opção inválida! Definindo tipo do pneu como duro por padrão.");
}

meta = Number(prompt("Defina o tamanho da pista: "));

console.clear();
console.log(`\n🏁 Dada a largada! Clima: ${clima} | Pneu: ${pneu}\n`);

// --- A ARENA (Loop de Repetição) ---
while (posicaoKM < meta) {
    turnos++;
    let avançoTurno = Math.floor(Math.random() * 10) + 1; // Sorteio base

    // --- AQUI ENTRA SUA LÓGICA ATUAL (Seus itens da mochila) ---
    if (clima === "chuvoso") {
        console.log("🌧️ Pista escorregadia! Reduzindo avanço...");
        avançoTurno -= 2; // Debuff de chuva
    } else if (clima === "ensolarado" && pneu === "macio") {
        console.log("🔥 DESEMPENHO MÁXIMO!");
        avançoTurno += 3; // Buff de performance
    }

    posicaoKM += avançoTurno; // Acumulador
    console.log(`Turno ${turnos}: O carro avançou para ${posicaoKM}m`);
}

// --- O PÓDIO (Seu Switch adaptado) ---
console.log("\n--- FIM DA CORRIDA ---");
// Aqui você usaria sua lógica de pódio baseada no resultado...