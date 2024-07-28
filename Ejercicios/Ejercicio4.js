const readline = require('readline');

// Definir los grupos de letras
const grupoA = new Set(['a', 'e', 'i', 'o', 'u']);
const grupoB = new Set(['b', 'c', 'd', 'f', 'g']);
const grupoC = new Set(['h', 'j', 'k', 'l', 'm']);
const grupoD = new Set(['n', 'p', 'q', 'r']);
const grupoE = new Set(['s', 't', 'v', 'w', 'x', 'y', 'z']);

// Configurar la interfaz de lectura de línea
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Preguntar al usuario por una letra
rl.question('Ingresa una letra: ', (input) => {
    const letra = input.toLowerCase();

    // Determinar a qué grupo pertenece la letra
    let grupo = null;

    if (grupoA.has(letra)) {
        grupo = 'A';
    } else if (grupoB.has(letra)) {
        grupo = 'B';
    } else if (grupoC.has(letra)) {
        grupo = 'C';
    } else if (grupoD.has(letra)) {
        grupo = 'D';
    } else if (grupoE.has(letra)) {
        grupo = 'E';
    }

    // Mostrar el resultado
    if (grupo) {
        console.log(`La letra '${letra}' pertenece al grupo ${grupo}.`);
    } else {
        console.log("La letra ingresada no pertenece a ningún grupo.");
    }

    // Cerrar la interfaz de lectura de línea
    rl.close();
});
