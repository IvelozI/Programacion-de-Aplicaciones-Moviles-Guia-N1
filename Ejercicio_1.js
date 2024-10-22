//Funcion para calcular el area de un circulo
function calcularareaCirculo() {
    let radio = parseFloat(prompt("Ingresa el radio del circulo:"));
    if (isNaN(radio) || radio <= 0) {
        alert("Ingresa un namero valido para el radio.");
        return;
    }
    const area = Math.PI * Math.pow(radio, 2);
    alert(`El area del circulo es: ${area.toFixed(2)}`);
}

//Función para calcular el área de un triángulo
function calcularareaTriangulo() {
    let base = parseFloat(prompt("Ingresa la base del triangulo:"));
    let altura = parseFloat(prompt("Ingresa la altura del triangulo:"));
    if (isNaN(base) || base <= 0 || isNaN(altura) || altura <= 0) {
        alert("Ingresa numeros validos para la base y la altura.");
        return;
    }
    const area = (base * altura) / 2;
    alert(`El area del triangulo es: ${area.toFixed(2)}`);
}

//Función para calcular el área de un rectángulo
function calcularareaRectangulo() {
    let base = parseFloat(prompt("Ingresa la base del rectangulo:"));
    let altura = parseFloat(prompt("Ingresa la altura del rectangulo:"));
    if (isNaN(base) || base <= 0 || isNaN(altura) || altura <= 0) {
        alert("Ingresa numeros validos para la base y la altura.");
        return;
    }
    const area = base * altura;
    alert(`El area del rectángulo es: ${area.toFixed(2)}`);
}

// Llamadas a las funciones
calcularareaCirculo();
calcularareaTriangulo();
calcularareaRectangulo();

