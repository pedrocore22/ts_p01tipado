// TypeScript

let mensaje: string;

mensaje = '¡Hola Mundo!';

// mensaje = 12; Error en tiempo de desarrollo

// Tipado de tipos primitivos

// string

let nombreUsuario: string = 'Juan';

// number

let resultado: number = 9.8;
// resultado = false; error

// boolean

let isMayorEdad: boolean = false;

// tipo-valor null

let value1: null = null; // muy poco utilizado

// tipo-valor undefined

let value2: undefined; // muy poquísimo utilizado

// tipo especial any (romper la inferencia de tipos)
// es usado cuando no sabemos aún que tipo va a tener
// una variable

let id: any = '1245';

id = 56; // acepta cualquier tipo

// Tipos de unión

let _id: string | number; // string o number

_id = 'A123412';
_id = 2623786;
// _id = false; error

// Alias de tipos

type razaPerros = 'Pastor Alemán' | 'Pastor Belga' | 'Mastín';

let razaToby: razaPerros;

razaToby = 'Pastor Alemán'; // Error con cualquier valor
                           // que no esté en razaPerros

// Tipado de funciones

function suma(operador1: number, operador2: number): number {
    return operador1 + operador2;
}

let resultado2: number = suma(2,3);

function setMensaje(text: string, usuario: string): void {
    console.log(text + ' ' + usuario);
}

// Parámetros opcionales

function division(op1: number, op2: number, message?: string): number | string {
    if (message) {
        return message + ' ' + op1 / op2;
    }
    return op1 / op2;
}

let resultado3: number | string = division(10,3);
resultado3 = division(20,2,'El resultado es');

// Tipos genéricos
// Sirven para definir los tipos utilizados en una función
// cuando se invoca (para aportar flexibilidad)

function setResultado<T>(resultado: T): any {
    if (typeof resultado === 'number') {
        return resultado >= 5 ? 'APTO' : 'NO APTO';
    }
    return resultado;
}

let resultado4: any = setResultado<string>('APTO');
let resultado5: any = setResultado<number>(3);

// Tipos para Arrays (2 sintaxis)

// let frutas: string[]; sintaxis menos utilizada
let frutas: Array<string>; // sintaix mas utilizada

// frutas = ['naranja','pera','manzana', false, 1]; error
frutas = ['naranja','pera','manzana'];

// Tipos de literal de objetos (se usa poco porque
// se utilizan normalmente Clases o Interfaces)

let jugador1: {nombre: string, equipo: string};

jugador1 = {
    nombre: 'Sergio Ramos',
    equipo: 'PSG',
    // fechaNacimiento: new Date(1980,1,1) error 
}


