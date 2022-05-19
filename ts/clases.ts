// Clases e interfaces en TypeScript

class Jugador {
    nombre: string; // declarar la propiedad como public
    apellidos: string; // declarar la propiedad como public
    equipos: Array<string>; // declarar la propiedad como public
    private goles: number; // limitar su acceso mediante métodos

    constructor(nombre: string, apellidos: string, equipos: Array<string>) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.equipos = equipos;
    }

    // métodos setter y getter

    getGoles(): number {
        return this.goles;
    }

    setGoles(goles: number): void {
        this.goles = goles;
    }

}

let jugador1: Jugador; // Esa variable tendrá que ser un objeto
                       // de la clase jugador

// Instacia objeto es idéntica a JavaScript

jugador1 = new Jugador('Lionel','Messi',['Barcelona','PSG']);

// jugador1.goles = 1; Error porque goles es private

jugador1.setGoles(1);
console.log(jugador1.getGoles());

// Clases con constructor breve

class Vehiculo {
    // Podemos aliviar la declaración de propiedades
    // si en los parámetros del constructor le añadimos
    // modificar de acceso (public o private)
    constructor(private marca: string, 
                private modelo: string, 
                private color: string) {}

    getMarca(): string {
        return this.marca;
    }

    setMarca(marca: string): void {
        this.marca = marca;
    }

    // resto de setter y getter

}

let coche1: Vehiculo = new Vehiculo('VW','Golf','Rojo');

console.log(coche1.getMarca());

// Interfaces
// En general sirven para que las clases implementen
// obligatoriamente una serie de propiedades y métodos

interface DatosMaestros {
    nombre: string;
    cif: string;

    getGeoCoordenadas(): string; // de los métodos solo se
                                 // define su cabecera
}

// Cuando necesitemos que una clase cumpla con esa
// interfaz usamos la palabra implements

class Proveedor implements DatosMaestros {
    nombre: string;
    cif: string;
    domicilio: string;

    // resto de código (constructor y los getter y setter);

    getGeoCoordenadas(): string {
        // código
        return '';
    }
}

// Las interfaces en frontend sobre todo se usan para
// definir tipos de datos propios (forma ligera)

interface Articulo {
    sku: string;
    marca: string;
    modelo: string;
    descripcion: string;
    price: number;
}

// En TypeScript las interfaces se pueden usar como tipos

let articulo1: Articulo;

// Como nosotros en los framework trabajamos dentro de ámbitos
// encapsulados (funciones en React y clases en Angular)
// podemos asignar valores con la notación del punto

// articulo1.marca = 'Adidas';
// articulo1.modelo = 'Pace';
// ...

// y también podemos asignar objetos completos

let articulo2: Articulo;

articulo2 = {
    sku: 'A12334',
    marca: 'Nike',
    modelo: 'Revolution',
    descripcion: 'Lorem ipsum...',
    price: 60
}

// En TypeScript también hay herencia de clases
// (las veremos en Java)

// 2º Uso de clases (encapsulación y reutilización de código)
// Clases estáticas

class MensajeFecha {

    private static dias = [
        'Domingo',
        'Lunes',
        'Martes',
        'Miércoles',
        'Jueves',
        'Viernes',
        'Sábado', // En JavaScript permite la última coma
    ]

    static getMensajeFecha(fecha: Date): string {
        return this.dias[fecha.getDay()] + ', ' +
               fecha.getDate() + '/' +
               fecha.getMonth() + '/' +
               fecha.getFullYear();
    }

}


// Como las clases estáticas no pueden instanciar objetos
// sus métodos se usan directamente con la notación del punto

let fechaNacimiento: Date = new Date(1973,10,18);

let mensajeFechaNacimiento: string;

mensajeFechaNacimiento = MensajeFecha.getMensajeFecha(fechaNacimiento);

console.log(mensajeFechaNacimiento);