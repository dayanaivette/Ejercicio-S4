const readlineSync = require('readline-sync');

// Función para evaluar la nota
function evaluarNota() {
    // Pedir al usuario que ingrese la nota
    const input = readlineSync.question('Ingrese la nota del examen: ');
    const nota = parseFloat(input);

    // Verificar si la nota es válida
    if (isNaN(nota) || nota < 0 || nota > 10) {
        console.log("Por favor, ingrese una nota válida entre 0 y 10.");
    } else {
        // Evaluar la nota y mostrar el mensaje correspondiente
        if (nota > 7) {
            console.log("¡Haz aprobado tu examen!");
        } else if (nota > 5) {
            console.log("Debe de mejorar su nota");
        } else {
            console.log("Haz aplazado tu examen");
        }
    }
}

// Llamar a la función para ejecutar el programa
evaluarNota();