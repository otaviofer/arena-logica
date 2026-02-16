/** Programa simulador de corrida com Node.js */

// config inicial do ambiente (variáveis de teste)
const clima = "ensolarado"; // Opções: "ensolarado", "chuvoso", "tempestade"
const pneu = "macio";       // Opções: "macio", "duro"
const posicao = 2;          // Opções: 1 a 10

console.log("--- Relatório da equipe de estratégia ---");

// Regras de lógica
if (clima === "tempestade" || (clima === "chuvoso" && posicao > 8)){
    console.log("⚠️ ENTRAR NO BOX IMEDIATAMENTE! Condições perigosas.");
}else if (clima === "chuvoso"){
    console.log("Cuidado! Reduza a velocidade nas curvas.");
}else if (clima === "ensolarado" && pneu === "macio"){
    console.log("DESEMPENHO MÁXIMO! Tente ultrapassagem");
}else if (clima === "ensolarado" && pneu === "duro"){
    console.log("Foco em constância. Aguarde o pit stop...");
}else{
    console.log("Condições estáveis, Siga o plano de corrida.");
}

// O Pódio (Uso do Switch Case)
console.log("\n--- Status do piloto ---");

switch (posicao){
    case 1:
        console.log("Posição atual: 1º lugar (Ouro) 🏆");
        break;
    case 2:
        console.log("Posição atual: 2º lugar (Prata) 🥈");
        break;
    case 3:
        console.log("Posição atual: 3º lugar (Bronze) 🥉");
        break;
    default:
        console.log(`Posição atual: ${posicao}º lugar. Fora do pódio.`);
}

console.log("\n--- Resumo Final ---");
const resumo = `O piloto enfrentou um clima de ${clima} com pneus ${pneu} e terminou na ${posicao}ª posição.`;
console.log(resumo);