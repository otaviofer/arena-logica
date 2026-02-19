/** Programa simulador de corrida com Node.js */

const prompt = require("prompt-sync")();

// --- Configurações Iniciais ---
const clima = "chuvoso"; 
const pneu = "macio";
let posicaoKM = 0;       // Onde o carro está na pista
const meta = 50;         // Tamanho da pista
let turnos = 0;

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