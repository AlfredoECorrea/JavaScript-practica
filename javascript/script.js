// 1. Función que indica si un número es par o impar



function esParOImpar(numero) {
    if (numero % 2 === 0) {
        console.log(`${numero} es par.`);
    } else {
        console.log(`${numero} es impar.`);
    }
}

console.log("1. Función que indica si un número es par o impar")
esParOImpar(10);
esParOImpar(5);



// 2. Función que indica cuál de dos números es mayor



function mayorOigual(num1, num2) {
    if (num1 > num2) {
        console.log(`${num1} es mayor que ${num2}.`);
    } else if (num1 < num2) {
        console.log(`${num2} es mayor que ${num1}.`);
    } else {
        console.log(`${num1} y ${num2} son iguales.`);
    }
}
console.log("2. Función que indica cuál de dos números es mayor")
mayorOigual(15, 7);

// 3. Función que indica si un número es múltiplo de 5

function esMultiploDe5(numero) {
    if (numero % 5 === 0) {
        console.log(`${numero} es múltiplo de 5.`);
    } else {
        console.log(`${numero} no es múltiplo de 5.`);
    }
}
console.log("3. Función que indica si un número es múltiplo de 5")
esMultiploDe5(15);
esMultiploDe5(66);                   

// 4. Función que imprime todos los números desde 0 hasta el número dado

function imprimirHastaNumero(numero) {
    for (let i = 0; i <= numero; i++) {
        console.log(i);
    }
}
console.log("4. Función que imprime todos los números desde 0 hasta el número dado")
imprimirHastaNumero(5);
imprimirHastaNumero(10); 

// 5. Función que imprime una palabra un número determinado de veces

function imprimirPalabra(palabra, cantidad) {
    for (let i = 0; i < cantidad; i++) {
        console.log(palabra);
    }
}

console.log("5. Función que imprime una palabra un número determinado de veces")
imprimirPalabra("Hola", 3);           
imprimirPalabra("Argentina", 5);


// 6. Función que imprime todos los valores de un array

function imprimirArray(array) {

    
    if (!Array.isArray(array)) {
        console.log("Por favor, proporciona un array válido.");
        return;
    }
    var longitud = array.length;
    for (var i = 0; i < longitud; i++) {
        
        var valorActual = array[i];
        console.log(valorActual);
    }
}

console.log("6. Función que imprime todos los valores de un array")
imprimirArray([1, 2, 3, 4, 5, 6, 7, 8]);
imprimirArray([100,25,98,78,62,35,86])



// 7. Función que imprime todos los valores de un array, excepto el de la 5ta posición

function imprimirArrayMenosLaPosicion5(array) {
    for (let i = 0; i < array.length; i++) {
        if (i !== 4) {
            console.log(array[i]);
        }
    }
}

console.log("7. Función que imprime todos los valores de un array, excepto el de la 5ta posición")
const miArrays = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

imprimirArrayMenosLaPosicion5(miArrays);


// 8. Función que imprime cada número del array multiplicado por un número dado

function imprimirMultiplicados(array, mult) {

    for (let i = 0; i < array.length; i++) {
        console.log(array[i] * mult);
    }
}

const numeros = [1, 2, 3, 4, 5];
const mult = 10;

console.log("8. Función que imprime cada número del array multiplicado por un número dado")
imprimirMultiplicados(numeros, mult);







    
