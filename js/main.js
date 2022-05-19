// TypeScript
var mensaje;
mensaje = '¡Hola Mundo!';
// mensaje = 12; Error en tiempo de desarrollo
// Tipado de tipos primitivos
// string
var nombreUsuario = 'Juan';
// number
var resultado = 9.8;
// resultado = false; error
// boolean
var isMayorEdad = false;
// tipo-valor null
var value1 = null; // muy poco utilizado
// tipo-valor undefined
var value2; // muy poquísimo utilizado
// tipo especial any (romper la inferencia de tipos)
// es usado cuando no sabemos aún que tipo va a tener
// una variable
var id = '1245';
id = 56; // acepta cualquier tipo
// Tipos de unión
var _id; // string o number
_id = 'A123412';
_id = 2623786;
var razaToby;
razaToby = 'Pastor Alemán'; // Error con cualquier valor
// que no esté en razaPerros
// Tipado de funciones
function suma(operador1, operador2) {
    return operador1 + operador2;
}
var resultado2 = suma(2, 3);
function setMensaje(text, usuario) {
    console.log(text + ' ' + usuario);
}
// Parámetros opcionales
function division(op1, op2, message) {
    if (message) {
        return message + ' ' + op1 / op2;
    }
    return op1 / op2;
}
var resultado3 = division(10, 3);
resultado3 = division(20, 2, 'El resultado es');
// Tipos genéricos
// Sirven para definir los tipos utilizados en una función
// cuando se invoca (para aportar flexibilidad)
function setResultado(resultado) {
    if (typeof resultado === 'number') {
        return resultado >= 5 ? 'APTO' : 'NO APTO';
    }
    return resultado;
}
var resultado4 = setResultado('APTO');
var resultado5 = setResultado(3);
// Tipos para Arrays (2 sintaxis)
// let frutas: string[]; sintaxis menos utilizada
var frutas; // sintaix mas utilizada
// frutas = ['naranja','pera','manzana', false, 1]; error
frutas = ['naranja', 'pera', 'manzana'];
// Tipos de literal de objetos (se usa poco porque
// se utilizan normalmente Clases o Interfaces)
var jugador1;
jugador1 = {
    nombre: 'Sergio Ramos',
    equipo: 'PSG'
};
