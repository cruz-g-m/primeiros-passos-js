/*
Faça um algoritimo que dado as 3 notas tiradas por um aluno em um semetres de faculdade calcule e imprima a
sua média e a sua classificação conforme a tabela abaixo.

Médio = (nota 1 + nota 2 + nota 3) / 3;

classificação

- Média menor que  5, reprovação;
- Média entre 5 e 7, recuperação;
- Média acima de 7, passou de semetres;
*/

const notaA = 8;
const notaB = 5;
const notaC = 9;

const mediaAluno = (notaA + notaB + notaC) / 3;

console.log(mediaAluno)

if(mediaAluno < 5){
    console.log("Reprovado");
}else if(mediaAluno >= 5 && mediaAluno <= 7){
    console.log("Recuperação");
}else{
    console.log("Passou de Semestre")
}