const readlineSync = require('readline-sync');

function obtenerDiasDelMes(mes) {
    // Diccionario con los meses y la cantidad de días que tienen
    const mesesDias = {
        "enero": 31,
        "febrero": 28,  // Consideramos 28 días para febrero
        "marzo": 31,
        "abril": 30,
        "mayo": 31,
        "junio": 30,
        "julio": 31,
        "agosto": 31,
        "septiembre": 30,
        "octubre": 31,
        "noviembre": 30,
        "diciembre": 31
    };
    
    // Convertir el mes a minúsculas para evitar problemas con la capitalización
    mes = mes.toLowerCase();
    
    // Devolver la cantidad de días del mes si existe en el diccionario
    if (mesesDias[mes] !== undefined) {
        return mesesDias[mes];
    } else {
        return "Mes no válido. Por favor, ingrese un mes válido.";
    }
}

// Pedir al usuario que ingrese un mes
const mesUsuario = readlineSync.question("Ingrese el mes: ");

// Obtener y mostrar la cantidad de días del mes ingresado
const dias = obtenerDiasDelMes(mesUsuario);

if (dias === "Mes no válido. Por favor, ingrese un mes válido.") {
    console.log(dias);
} else {
    console.log(dias);
}

