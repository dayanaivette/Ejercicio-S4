const readlineSync = require('readline-sync');

function obtenerJugadaComputadora() {
    const jugadas = ["Piedra", "Papel", "Tijera"];
    const indiceAleatorio = Math.floor(Math.random() * jugadas.length);
    return jugadas[indiceAleatorio];
}

function determinarGanador(jugadaUsuario, jugadaComputadora) {
    if (jugadaUsuario === jugadaComputadora) {
        return "Empate";
    } else if (
        (jugadaUsuario === "Piedra" && jugadaComputadora === "Tijera") ||
        (jugadaUsuario === "Papel" && jugadaComputadora === "Piedra") ||
        (jugadaUsuario === "Tijera" && jugadaComputadora === "Papel")
    ) {
        return "Usuario";
    } else {
        return "Computadora";
    }
}

function jugarRondas(cantidadRondas) {
    let puntajeUsuario = 0;
    let puntajeComputadora = 0;
    const jugadasValidas = ["Piedra", "Papel", "Tijera"];

    for (let ronda = 1; ronda <= cantidadRondas; ronda++) {
        let jugadaUsuario;
        do {
            jugadaUsuario = readlineSync.question(`Ronda ${ronda} de ${cantidadRondas}\nElige tu jugada: Piedra, Papel o Tijera: `);
        } while (!jugadasValidas.includes(jugadaUsuario));

        let jugadaComputadora = obtenerJugadaComputadora();
        let ganador = determinarGanador(jugadaUsuario, jugadaComputadora);

        console.log(`Ronda: ${ronda} de ${cantidadRondas}`);
        console.log(`Jugadora: ${jugadaUsuario}`);
        console.log(`Computadora: ${jugadaComputadora}`);

        if (ganador === "Usuario") {
            console.log("Jugadora ha ganado esta ronda");
            puntajeUsuario++;
        } else if (ganador === "Computadora") {
            console.log("Computadora ha ganado esta ronda");
            puntajeComputadora++;
        } else {
            console.log("Empate en esta ronda");
        }

        console.log(`Puntaje: ${puntajeUsuario} (Jugadora) - ${puntajeComputadora} (Computadora)`);
        console.log(`Rondas restantes: ${cantidadRondas - ronda}`);
        console.log('-------------------------------');
    }

    if (puntajeUsuario > puntajeComputadora) {
        console.log("La Jugadora ha ganado el juego!");
    } else if (puntajeComputadora > puntajeUsuario) {
        console.log("La Computadora ha ganado el juego!");
    } else {
        console.log("El juego ha terminado en empate!");
    }
}

const cantidadRondas = parseInt(readlineSync.question("¿Cuántas rondas quieres jugar? "), 10);
jugarRondas(cantidadRondas);