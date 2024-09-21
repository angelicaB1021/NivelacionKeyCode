//js es un lenguaje no tipado
//la clase de hoy es diferencia entre junior y semi senior

//tipos de datos
//primitivos y no primitivos
//primitivo 
console.log(typeof "string");
console.log(typeof 5);
console.log(typeof true);
console.log(typeof undefined);//no existe
console.log(typeof BigInt);//se usa para calculos exactos- no se puede utilizar en math
console.log(typeof Symbol);// crea valores unicos claves

console.log (typeof function)
console.log(typeof Object());
console.log(typeof null); //{}
console.log(typeof Array());

//tipos de variables
//1.Declarar = cuando le damos vida- ocupa un espacio en memoria
//2. Inicializar= donde se coloca un valor por primera vez
//3. Asignar= es cambiar el valor.

var variableFea; //Declarando
variableFea= 10; //Inicializando y asignando
variableFea =15; // Asignando 

const constante = "constante";
var variable= "variable tiende a ser mas global";
let especifidad= "es mucha mas especifica";

//Var: Reasignable y Redeclarable 
var almuerzo = "bandeja paisa";
var almuerzo = "Changua";//Redeclarando
almuerzo = "corrientazo";//Reasignando

//let: No declarable pero si reasignable 
let pizza = "pizza pollo";
pizza = "pizza mexicana";

//const: No redeclarable, no reagsignable
const sopa = "mute";
// URL de un Api, Api KEY, Token Contrasenas, Id´s, etc
//si o si tiene que iniciar con un valor o no funciona 

//Estructura de control 
// ** Bloque: se ejecuta segun condiciones
let puedeEntrar= false;
let puedeEntrar2= true;
if (puedeEntrar){
    console.log("Haz algo");
}else if (puedeEntrar2) {
    console.log("Haz algo en codicional anidad");
}else {
    console.log("No haga nda");
}
// variable de iteración

//FOR ciclo controlado y númerico
for(let i = 0; i < 10; i++){
console.log(i);
}

//WIHLE: ciclo no sea tan controlados (puede crear un blucle)
while (false){
    //mucha logica, desconociendo cuantas lo va a hacer
}

//SWITCH: control de una variable puede tener muchos valores
let action = 'SUMAR';{
case 'ADD':
    case 'SUMAR':
        console.log('Añadiendo');
        break ;
        case 'SUBTRACT':
            console.log('Quitando');
            default :
            console.log('No haz nada');
}

//Compuertas logicas y operadores

//AND- Ampersond &&
console.log( true && false); // si ambos valores son verdaderos
//OR _pipes ||
console.log(true || false); // si algunos de los valores es verdaderos
//NOT-Exclamation !
console.log(!true); // el valor contrario

//operadores
// Igualdad de valor 
console.log(5 == 5); //operador de igualdad
console.log(5 != 5); //operador de diferencia

//Igualdad de valor y de Tipo
console.log('5'=== 5 );
console.log('5' !== 4);

console.log(5 > 5);
console.log(5 >=4);

console.log(5 < 6);
console.log(5 <= 6);

//valores Falsys
//son valores que se evaluan como Booleanos, JS nos retorna falso
console.log(!!undefined);//!! es doble falso
console.log(!! null);
console.log(!!"");
console.log(!!NaN)// cuando quiere sumar una nota con un numero

console.log(!!"jadj");
console.log(!![]);
console.log(!!{});

let algunaVariable = "Variable";
function API(){
return null;
}
function modificala(){
    algunaVariable = API()
        return !!algunaVariable;
    
}
console.log(modificala())

//FUNCIONES
//on bloques de codigo que pueden se llamadas
//puerta reutilizable, modularizar y centralizar
//caracteristiscas: parametros, Retorno

//function
//funcion declaracion 
function sumar (a, b ){
    return a+  b;
}
console.log(sumar(5, 4));

//Arrow Funtions 
//garantiza que el codigo no sera cambiado
// funcion de Expresión 
const restar = (a, b) =>{
    return a -b ;
}
console.log(restar(9, 5));

//Reasignables, Redeclarables
function sumar (a, b){
    return a * 5;
}

//si quiero tener funciones escalables que desconozca el tamañor de los parametros
const canasta = () =>{
    return arguments;
}
console.log(canasta('guayava', 'Manzana', 'Pera'));

function fruver (){
    //Arrow: tiene la capacidad de heredar 
    return () =>{
        return arguments
    }
}

console.log(fruver('guayava', 'Manzana', 'Pera')());

//SCOPE:
//es el contexto de ejecucion 
//en pocas palabra ¿Donde existe mi variable?
//¿donde existe mi funcion?
// ¿donde la puedo utilizar?

//variable global por que esta fuera de la funcion
let variable = " Por fuera del scope";

//funcion global
const funcionConFlecha = () =>{
    //variable lobal/funcion
    let varible = "esto es una variable";
    console.log(variable);
}
console.log(variable);

//funcion con flecha 
//bloque

//aqui falta el codigo de la linea 206 del profesor


// HOSTING: separa la declaracion y la inicializacion de una variable

