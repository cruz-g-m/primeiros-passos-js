/*
O IMC - Indice de massa corporal é um critério da organização mundial da saude para dar uma indicação sobre
a confição de peso de uma pessoa adulta.

formula do imc:
IMC = peso / (altura * altura)

Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

IMC em adultos condição:

-Abaixo de 18.5 - abaixo do peso;
-Entre 18.5 e 25 - peso normal;
-Entre 25 e 30 - acima do peso;
-Entre 30 e 40 - obeso;
-Acima de 40 - obesidade grave;
*/

const peso = 120;
const altura = 1.70;

const imcAdulto = peso / (altura * altura);

if (imcAdulto < 18.5) {
    console.log(imcAdulto);
    console.log("Abaixo do peso");
} else if (imcAdulto >= 18.5 && imcAdulto <= 25) {
    console.log(imcAdulto);
    console.log("Peso normal");
} else if (imcAdulto >= 25 && imcAdulto <= 30) {
    console.log(imcAdulto);
    console.log("Acima do peso");
} else if (imcAdulto >= 30 && imcAdulto <= 40) {
    console.log(imcAdulto);
    console.log("Obeso");
} else if (imcAdulto > 40) {
    console.log(imcAdulto);
    console.log("Obesidade grave");
}