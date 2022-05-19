// Clases e interfaces en TypeScript
var Jugador = /** @class */ (function () {
    function Jugador(nombre, apellidos, equipos) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.equipos = equipos;
    }
    // métodos setter y getter
    Jugador.prototype.getGoles = function () {
        return this.goles;
    };
    Jugador.prototype.setGoles = function (goles) {
        this.goles = goles;
    };
    return Jugador;
}());
var jugador1; // Esa variable tendrá que ser un objeto
// de la clase jugador
// Instacia objeto es idéntica a JavaScript
jugador1 = new Jugador('Lionel', 'Messi', ['Barcelona', 'PSG']);
// jugador1.goles = 1; Error porque goles es private
jugador1.setGoles(1);
console.log(jugador1.getGoles());
// Clases con constructor breve
var Vehiculo = /** @class */ (function () {
    // Podemos aliviar la declaración de propiedades
    // si en los parámetros del constructor le añadimos
    // modificar de acceso (public o private)
    function Vehiculo(marca, modelo, color) {
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
    }
    Vehiculo.prototype.getMarca = function () {
        return this.marca;
    };
    Vehiculo.prototype.setMarca = function (marca) {
        this.marca = marca;
    };
    return Vehiculo;
}());
var coche1 = new Vehiculo('VW', 'Golf', 'Rojo');
console.log(coche1.getMarca());
// Cuando necesitemos que una clase cumpla con esa
// interfaz usamos la palabra implements
var Proveedor = /** @class */ (function () {
    function Proveedor() {
    }
    // resto de código (constructor y los getter y setter);
    Proveedor.prototype.getGeoCoordenadas = function () {
        // código
        return '';
    };
    return Proveedor;
}());
// En TypeScript las interfaces se pueden usar como tipos
var articulo1;
// Como nosotros en los framework trabajamos dentro de ámbitos
// encapsulados (funciones en React y clases en Angular)
// podemos asignar valores con la notación del punto
// articulo1.marca = 'Adidas';
// articulo1.modelo = 'Pace';
// ...
// y también podemos asignar objetos completos
var articulo2;
articulo2 = {
    sku: 'A12334',
    marca: 'Nike',
    modelo: 'Revolution',
    descripcion: 'Lorem ipsum...',
    price: 60
};
// En TypeScript también hay herencia de clases
// (las veremos en Java)
// 2º Uso de clases (encapsulación y reutilización de código)
// Clases estáticas
var MensajeFecha = /** @class */ (function () {
    function MensajeFecha() {
    }
    MensajeFecha.getMensajeFecha = function (fecha) {
        return this.dias[fecha.getDay()] + ', ' +
            fecha.getDate() + '/' +
            fecha.getMonth() + '/' +
            fecha.getFullYear();
    };
    MensajeFecha.dias = [
        'Domingo',
        'Lunes',
        'Martes',
        'Miércoles',
        'Jueves',
        'Viernes',
        'Sábado', // En JavaScript permite la última coma
    ];
    return MensajeFecha;
}());
// Como las clases estáticas no pueden instanciar objetos
// sus métodos se usan directamente con la notación del punto
var fechaNacimiento = new Date(1973, 10, 18);
var mensajeFechaNacimiento;
mensajeFechaNacimiento = MensajeFecha.getMensajeFecha(fechaNacimiento);
console.log(mensajeFechaNacimiento);
