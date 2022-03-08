/* let resultado = 10 + 10;
console.log ("Soma: ", resultado);

resultado = 10 - 10;
console.log ("Subtração: ", resultado);

resultado = 10 * 10;
console.log ("Multiplicação: ", resultado);

resultado = 10 / 10;
console.log ("Divisão: ", resultado) ;

resultado = 10 % 3;
console.log ("Resto: ", resultado); */


/* const buttonElement = document.getElementById('btn');


buttonElement.addEventListener("click", function(event) {
document.getElementById("nome").innerHTML = "Meu nome é Edson";
}) */


/* const professor = "Calinho Beckhauser";
let idade = 27;
const programador = false;


if (idade === 28) {
    console.log ("A")
} else {
    console.log ("B")
} */

/* alert ("Warning !!!!");
 */
const p = document.getElementById("first");
const btn = document.getElementById("botao1");
/* p.innerHTML = "Editei essa linha com JS!!" */

btn.addEventListener("click", function()  {
    p.innerHTML = "Vá a Merda";
});
console.log(p);