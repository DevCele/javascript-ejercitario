// Operadores de comparación
// 1. Comprueba si 10 es mayor o igual que 9 e imprime el resultado en consola.
function compareTenAndNine() {
    let numero1 = 10;
    let numero2 = 9;
    if (numero1 >= numero2){
        console.log(numero1, "es mayor que", numero2);
    } else {
        console.log(numero1, "es menor que", numero2)
    }
}
compareTenAndNine()

// 2. Comprueba si 0 es igual a 0 e imprime el resultado en consola.
function compareZeroAndZero() {
    let numero1 = 0;
    let numero2 = 0;
    if (numero1 == numero2){
        console.log(numero1, "es igaul que", numero2);
    } else {
        console.log(numero1, "no es igual que", numero2)
    }
}
compareZeroAndZero()

// 3. Comprueba si 7 es mayor que 8 y menor que 10, e imprime el resultado en consola.
function compareSeven() {
    let numero1 = 7;
    if (numero1 > 8 && numero1 < 10){
        console.log ("7 es mayor que 8 y menor que 10");
    } else{
        console.log("7 no cumple con ambas condiciones mencionados")

    }

}
compareSeven()

// Operadores lógicos
// 4. Verifica si puedes comprar un producto de 1500 con un descuento del 25% teniendo 1150€ e imprime si puedes o no.
function canBuyProduct() {
    let monto = 1150
    let precio_producto = 1500
    let descuento = 0.25
    if (monto > ((precio_producto * descuento) - precio_producto)){
        console.log("Puedes comprar el producto")
    } else{
        console.log("No puedes comprar el producto")
    }

}
canBuyProduct()
// Variables
// 5. Crea una variable llamada `mensaje` y asígnale el valor "Hola JavaScript", luego imprime la variable en consola.
function createMessageVariable() {
    let mensaje = "Hola JavaScript"
    console.log(mensaje)
}

createMessageVariable()
// 6. Crea una variable llamada `resultado` y asígnale la suma de 2 y 3, luego imprime la variable en consola.
function createSumVariable() {
    let resultado = 2 + 3
    console.log(resultado)
}
createSumVariable()

// 7. Crea una constante llamada `IS_DISABLED` y asígnale el valor booleano `true`, luego imprime la constante en consola.
function createDisabledConstant() {
    const IS_DISABLED = true;
    console.log(IS_DISABLED);
}
createDisabledConstant()

// Null y Undefined
// 8. Crea una variable con `let` llamada `capacidad` y asígnale un valor `null`, luego imprime la variable en consola.
function createNullVariable() {
    let capacidad = null;
    console.log(capacidad);
}
createNullVariable()

// 9. Crea una variable con `let` llamada `dinero` y asígnale un valor `undefined`, luego imprime la variable en consola.
function createUndefinedVariable() {
    let dinero = undefined;
    console.log(dinero)
}
createUndefinedVariable()

// typeof
// 10. Escribe un código para ver el tipo de una variable llamada `userName` e imprime el tipo de dato en consola.
function checkUserNameType() {
    let userName = "Celeste"
    console.log(typeof userName)
    
}
checkUserNameType()
// 11. Asegúrate de que `dogId` es una cadena de texto y luego imprime el tipo de dato en consola.
function checkDogIdIsString() {
    let dogId = "Kaiser";
    console.log(typeof dogId)
}
checkDogIdIsString()

// console.log()
// 12. Imprime un mensaje en la consola utilizando `console.log()`.
function logMessage() {
    console.log("Este es un mensaje en consola")
}
logMessage()

// 13. Utiliza `console.log()` para imprimir el valor de la variable `edad` que tiene el valor 30.
function logAge() {
    let edad = 30
    console.log(edad)
}
logAge()

// 14. Muestra el mensaje 'La versión de JavaScript es' seguido de la variable `version` con el valor 2024 usando `console.log()`.
function logVersion() {
    let version = 2024;
    console.log("La versión de JavaScript es", version)
}

// Exportar todas las funciones para poder usarlas en las pruebas
module.exports = {
    compareTenAndNine,
    compareZeroAndZero,
    compareSeven,
    canBuyProduct,
    createMessageVariable,
    createSumVariable,
    createDisabledConstant,
    createNullVariable,
    createUndefinedVariable,
    checkUserNameType,
    checkDogIdIsString,
    logMessage,
    logAge,
    logVersion,
};
