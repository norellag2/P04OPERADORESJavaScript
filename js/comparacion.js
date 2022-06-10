//Operador de comparacion

//Los valores en js distinguen mayúsculas, minúsculas, acentos y diacríticos

//Operador de igualdad == 

let ciudad = 'Caceres';
let termino = 'Caceres';

let hayCoincidencia = ciudad ==termino;
console.log(hayCoincidencia);

//Tiene una particularidad en JS y es que no es estricto con los tipos de datos

let valor1 = 3;
let valor2 = '3';

hayCoincidencia = valor1 == valor2;
console.log(hayCoincidencia);

//Operador de igualdad estricta ===
hayCoincidencia = valor1 === valor2;
console.log(hayCoincidencia);

//Operador de desigualdad != (practicamente no se utiliza)

//Operador de desigualdad estricta !== devuelven true cuando los operandos no son iguales
let nohayCoincidencia =valor1 !== valor2;
console.log(nohayCoincidencia);

//Operador mayor que >
valor1 = 8.9;
valor2 = 2;
console.log(valor1 > valor2);

//Operador mayor o igual que >=
//Operador menor que <
//Operador menor que o igual <=