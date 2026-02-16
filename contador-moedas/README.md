# 🪙 Missão: O Contador de Moedas do Rei

Este projeto é o "Boss Final" do módulo de **Repetições**.

## 📖 O Desafio
O Rei precisava filtrar moedas "abençoadas" (múltiplos de 3) em um intervalo de tesouros. 
O programa utiliza JavaScript para processar um valor inicial e final, identificando, contando e somando os múltiplos encontrados.

## 🎒 Itens Utilizados na Mochila
- **Loop `for`**: Para percorrer o intervalo do tesouro.
- **Operador `%` (Módulo)**: Para identificar os múltiplos de 3.
- **Contadores e Acumuladores**: Para gerar os relatórios de quantidade e soma total.
- **`prompt-sync`**: Para interação via terminal (Node.js).

## 🚀 Como Executar
1. Instale as dependências: `npm install prompt-sync`
2. Rode o programa: `node tesouro.js`

---

# 📜 Aprendizados da Missão

Para essa missão, o seu melhor aliado é o **`for`**.

Como o usuário vai fornecer o **início** e o **fim**, você tem um caminho com distância conhecida. O `for` foi forjado exatamente para situações onde sabemos exatamente onde a jornada começa e onde ela termina.

```javascript
// Exemplo 
for (let i = valorInicial; i <= valorFinal; i++) {
    // Aqui dentro você faz a mágica (o filtro do múltiplo de 3)
}

```
### 🏹 Por que não os outros?

* **`while`:** Você *poderia* usar, mas teria que criar a variável de controle fora e somar o `i++` manualmente dentro. É como usar uma bota pesada para uma corrida de velocidade; funciona, mas dá mais trabalho.
* **`do...while`:** Mesma coisa do `while`, mas ele correria o risco de contar uma moeda mesmo se o valor inicial fosse maior que o final (já que ele executa antes de perguntar).

### 🎒 Dica de Inventário:

Ao capturar os valores do formulário, não esqueça de usar o `Number()` para garantir que o JavaScript entenda que "1" e "20" são números e não textos, senão o seu loop pode se comportar de forma estranha!

### 🔍 O Erro de Identificação (armadilhas)

Excelente começo! A estrutura do seu ambiente Node.js com `prompt-sync` está perfeita. No entanto, você caiu em uma pequena "armadilha de pântano" na lógica dentro do loop.

Vamos analisar o que está acontecendo no seu `if`:

### 🔍 O Erro de Identificação

No seu código, eu havia escrevido:

```javascript
if(moedasDoRei % 3 === 0)

```

O problema aqui é que eu testei a variável `moedasDoRei` (o **contador**), que começa em 0.

**O que o Rei quer:** Ele quer que você teste cada número do intervalo (o seu `i`) para ver se **ele** é múltiplo de 3. Se o número da vez (`i`) for "abençoado", aí sim você aumenta o seu contador.