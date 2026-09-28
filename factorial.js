function solicitarNumero() {
    while (true) {
        const entrada = prompt('Ingresa un número para calcular su factorial:');
        if (entrada === null) return null; // El usuario canceló

        // TODO: convertir la entrada y validar que sea un número
        // Si no es válido: mostrar mensaje de error y usar "continue"
        // Si es válido: return el número
        if(isNaN(entrada) || entrada.trim() === '') {
            alert('Por favor, ingresa un número válido.');
            continue;
        } else {
            const numero = parseInt(entrada);
            if (numero < 0) {
                alert('Por favor, ingresa un número no negativo.');
                continue;
            }
            return numero;
    }
}
}
function calcularFactorial(n) {
    // TODO: calcular y devolver el factorial de n
    if (n === 0 || n === 1) {
        return 1;
    } else {
        let factorial = 1;
        for (let i = 2; i <= n; i++) {
            factorial *= i;
        }
        return factorial;
    }
}

// --- Programa principal ---
const numero = solicitarNumero();

if (numero === null) {
    console.log('Operación cancelada.');
} else {
    const resultado = calcularFactorial(numero);
    console.log(`El factorial de ${numero} es: ${resultado}`);
    document.getElementById('resultado').textContent = `El factorial de ${numero} es: ${resultado}`;
}