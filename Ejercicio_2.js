//Clase Producto con propiedades nombre y precio
class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
//Metodo para mostrar los detalles del producto
    mostrarDetalles() {
        console.log(`Producto: ${this.nombre}, Precio: $${this.precio}`);
    }
}

//Crear varias instancias de la clase Producto e invocar el método
const producto1 = new Producto("Computador", 650000);
const producto2 = new Producto("Telefono", 200000);
const producto3 = new Producto("Radio", 15000);

producto1.mostrarDetalles(); 
producto2.mostrarDetalles(); 
producto3.mostrarDetalles(); 
