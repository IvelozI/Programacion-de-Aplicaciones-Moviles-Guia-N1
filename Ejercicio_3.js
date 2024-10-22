// Clase Trabajador con atributos nombre y sueldo
class Trabajador {
    constructor(nombre, sueldo) {
        this.nombre = nombre;
        this.sueldo = sueldo;
    }
//Metodo que imprime los detalles del trabajador
    mostrarDetalles() {
        console.log(`Trabajador: ${this.nombre}, Sueldo: $${this.sueldo}`);
    }
}

//Clase Gerente que hereda de Trabajador,añade el atributo departamento
class Gerente extends Trabajador {
    constructor(nombre, sueldo, departamento) {
        super(nombre, sueldo); 
        // Llamada al constructor de la clase padre (Trabajador)
        this.departamento = departamento;
    }
//Sobrescribiendo el metodo,incluir el departamento
    mostrarDetalles() {
        console.log(`Gerente: ${this.nombre}, Sueldo: $${this.sueldo}, Departamento: ${this.departamento}`);
    }
}
//Crear varias instancias de Trabajador y Gerente e invocar los métodos
const trabajador1 = new Trabajador("Alex", 500000);
const trabajador2 = new Trabajador("Rosa", 550000);
const gerente1 = new Gerente("Carlos", 700000, "Ventas");
const gerente2 = new Gerente("Luisa", 750000, "Secretaria");

trabajador1.mostrarDetalles(); 
trabajador2.mostrarDetalles(); 
gerente1.mostrarDetalles();  
gerente2.mostrarDetalles();
