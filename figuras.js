//Código del cuadrado

//perimetro
function perimetroCuadrado(lado) {
  return lado * 4;
}

//area
function areaCuadrado(lado) {
  return lado * lado;
}

//Código del triangulo

//Perimetro
function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
  }
//Area
function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

  
// Código del círculo

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


//Interaccion con HTML
//Cuadrado
function CalcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}
function CalcularAreaCuadrado(){
const input = document.getElementById("InputCuadrado");
const value = input.value;

const area = areaCuadrado(value);
alert(area);
}

//Triangulo
function CalcularPerimetroTriangulo(){
    const input0 = document.getElementById("InputTLado1");
    const value0 = parseFloat(input0.value);
    const input1 = document.getElementById("InputTLado2");
    const value1 = parseFloat(input1.value);
    const inputb = document.getElementById("InputTBase");
    const valueb = parseFloat(inputb.value);
    
    const perimetro = perimetroTriangulo(value0,value1,valueb);
    alert(perimetro);
}
function CalcularAreaTriangulo(){
const input0 = document.getElementById("InputTLado1");
const value0 = input0.value;
const input = document.getElementById("InputTBase");
const valueb = input.value;

const area = areaTriangulo(value0,valueb);
alert(area);
}

//Circulo
function CalcularPerimetroCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    
    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}
function CalcularAreaCirculo(){
const input = document.getElementById("InputCirculo");
const value = input.value;

const area = areaCirculo(value);
alert(area);
}
