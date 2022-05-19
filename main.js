/* Ejercicio para generar el factorial de un numero */

let numero = prompt("Digite un numero para saber su factorial: ")
let factorial = 1
let i = 1
Number(numero)

while(i<=numero){
   factorial=factorial*i
   /* mostrar la operacion por consola */
    console.log(factorial);
    i++
}
alert("El factorial de "+numero+"! es: "+factorial);