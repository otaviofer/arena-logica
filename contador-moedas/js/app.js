const prompt = require("prompt-sync")();
console.log("/***** Baú de modedas do Rei *****/\n");
console.log("-----------------------------------");
const valInicial = Number(prompt(" Digite o valor inicial: "));
const valFinal = Number(prompt(" Digite o valor final: "));

let contadorMoedas = 0; // Quantas moedas encontramos
let somaMoedas = 0;     // O valor total acumulado
let listaMoedas = "";   // Para listar quais são as moedas

for(let i=valInicial; i<=valFinal; i++){
    if(i % 3 === 0){
        contadorMoedas++;
        somaMoedas += i;
        listaMoedas += i + " ";
    }
}

console.log(`\n No baú do rei, essa é a lista das moedas encontradas: ${listaMoedas}`);
console.log(` Moedas multiplas de 3: ${contadorMoedas}`);
console.log(` Soma das moedas multiplas de 3: ${somaMoedas}\n`);