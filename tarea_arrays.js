// 1. Qué son los Arrays
// 1.1 Crea una función llamada `procesarPedido` que recibe un array `pedido`.
// Debes sacar el primer elemento (nombre del cliente), añadir "bebida" al inicio del array y añadir el nombre del cliente al final.
function procesarPedido(pedido) {
    const nombreCliente = pedido.shift();
    pedido.unshift("bebida");
    pedido.push(nombreCliente);

    return pedido
}
const pedido = ["Celeste", "agua", "pan", "ensalada"]
const realizado = procesarPedido(pedido)
console.log(realizado)

// 2. Iteración de Arrays en Javascript
// 2.1 Crea una función llamada `sumarPares` que reciba un array de números.
// Debes iterar sobre el array, sumar todos los números pares y devolver la suma.
function sumarPares(numeros) {
    let suma = 0 // Acumulador
    //Iterar
    for(i = 0; i < numeros.length; i++){
        if(numeros[i] % 2 === 0){  // reconocer solo los pares
            suma += numeros[i] //agregar al acumulador los numeros pares 
        }
    }
    return suma //devuelve la suma
}
const arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 20];
const sumaDePares = sumarPares(arrayNumeros);
console.log(sumaDePares); // Imprime 50

// 3. Buscar en Arrays
// 3.1 Escribe una función llamada `palabrasTerminanConA` que reciba un array de palabras y devuelva `true` si todas terminan con "a", o `false` si al menos una no lo hace.
function palabrasTerminanConA(palabras) {
    for(let i = 0; i < palabras.length; i++){
        if(!palabras[i].endsWith("a")){
            return false;
        }
    }
    return true;
}

const palabras = ['casa', 'silla', 'mesa']
console.log(palabrasTerminanConA(palabras)) // -> true

// 4. Transformar Arrays
// 4.1 Crea una función llamada `buscaPalabras` que reciba dos parámetros: un array `words` y una palabra `word`.
// Busca el índice de la palabra en el array y devuelve todas las palabras después de ese índice en un nuevo array
function buscaPalabras(words, word) {
    // Tu código aquí
}

const words = ['hola', 'mundo', 'javascript', 'node'];
console.log(buscaPalabras(words, 'mundo')) // El resultado debe ser: ['javascript', 'node']

// 5. Matrices
// 5.1 Crea una función llamada `findJavaScript` que reciba una matriz de cadenas y devuelva la posición de "JavaScript".
// Si no la encuentra, devuelve [-1, -1].
function findJavaScript(matrix) {
    for(i = 0; i < matrix.length; i++){
        for(j = 0; j < matrix[i].length; j++){
           
            if(matrix[i][j] === "JavaScript"){
                return `JavaScript encontrado en la posición: [${i}, ${j}]`
            }
        }
    }
    return "JavaScript no encontrado"
}

const matrix = [
    ['HTML', 'CSS', 'JavaScript'],
    ['Java', 'C++', 'Python'],
    ['Ruby', 'Go', 'Swift']
  ]
  
  const position = findJavaScript(matrix);
  console.log(position); // -> JavaScript encontrado en la posición: [0, 2]

// 6. Algoritmos con Arrays
// 6.1 Crea una función llamada `findMinMaxPages` que reciba un array de números (representando el número de páginas de libros).
// La función debe devolver un array con dos posiciones: el índice del libro con menos páginas y el índice del libro con más páginas.
function findMinMaxPages(books) {
        // Inicializa el índice del libro con menos y más páginas
        let minIndex = 0;
        let maxIndex = 0;
    
        // Inicializa los valores mínimo y máximo de páginas
        let minPages = books[0];
        let maxPages = books[0];
    
        // Itera a través del array de libros
        for (let i = 1; i < books.length; i++) {
            if (books[i] < minPages) {
                minPages = books[i]; // Actualiza el mínimo
                minIndex = i;        // Guarda el índice del libro con menos páginas
            }
            if (books[i] > maxPages) {
                maxPages = books[i]; // Actualiza el máximo
                maxIndex = i;        // Guarda el índice del libro con más páginas
            }
        }
    
        // Devuelve un array con el índice del libro con menos y más páginas
        return [minIndex, maxIndex];
}

const libros = [350, 120, 540, 275, 390, 130, 670];
const resultado = findMinMaxPages(libros);
console.log(resultado); // -> [1, 6]

// Exportar las funciones para que puedan ser completadas y probadas
module.exports = {
    procesarPedido,
    sumarPares,
    palabrasTerminanConA,
    buscaPalabras,
    findJavaScript,
    findMinMaxPages
};
