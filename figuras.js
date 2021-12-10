//Código del cuadrado
console.group("Cuadrados");
//perimetro
function perimetroCuadrado(lado) {
  return lado * 4;
}

//area
function areaCuadrado(lado) {
  return lado * lado;
}

console.groupEnd();

//Código del triangulo
console.group("Triangulos");
//Perimetro
function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
  }
//Area
  function areaTriangulo(base, altura) {
    return (base * altura) / 2;
  }
 
  console.groupEnd();

  
// Código del círculo
console.group("Círculos");


// Diámetro
function diametroCirculo(radio) {
  return radio * 2;
}

// PI
const PI = Math.PI;

// Circunferencia
function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

// Área
function areaCirculo(radio) {
  return (radio * radio) * PI;
}

console.groupEnd();