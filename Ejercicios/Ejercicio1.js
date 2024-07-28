const readline = require('readline');

// Crear una interfaz de lectura
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Solicitar al usuario que ingrese un número
rl.question('Por favor, ingrese un número: ', (input) => {
    // Convertir la entrada a un número entero
    const numero = parseInt(input);

    // Verificar si el número es par o impar
    if (isNaN(numero)) {
        console.log('El valor ingresado no es un número válido.');
    } else if (numero % 2 === 0) {
        console.log(`El número ${numero} es par.`);
    } else {
        console.log(`El número ${numero} es impar.`);
    }

    // Cerrar la interfaz de lectura
    rl.close();
});

