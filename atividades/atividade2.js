const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite o valor de A: ", (a) => {
    rl.question("Digite o valor de B: ", (b) => {
        let A = parseInt(a);
        let B = parseInt(b);
        let C;

        if (A === B) {
            C = A + B;
        } else {
            C = A * B;
        }

        console.log("Resultado: " + C);

        rl.close();
    });
});