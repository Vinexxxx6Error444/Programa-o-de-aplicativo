function verificarNumero(a) {
    if (a > 0) {
        return "Positivo";
    } else if (a < 0) {
        return "Negativo";
    } else {
        return "Zero";
    }
}

// Chamando a função
const resultado = verificarNumero(5);

// Exibindo resultado
console.log(`O número é: ${resultado}`);