/**
 * Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta
 * e a escolha da condição de pagamento.
 * Utilize os códigos da tabela a seguir para ler qual condição de pagamento escolhida e efetuar o calculo
 * adequado.
 * 
 * Código condição de pagamento:
 * - A vista debito, recebe 10% de desconto;
 * - A vista no dinheiro ou pix, recebe 15% de desconto;
 * - Em duas vezes, preço normal de etiqueta sem juros;
 * - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
 */

let valorProduto = 100;
const aVistaDebito = false;
const aVistaDinheiroPix = false;
const emDuasVezes = false;
const acimaDuasVezes = true;


if(aVistaDebito){
    let valorFinal = (valorProduto - ((valorProduto * 10) / 100 ));
    console.log(valorFinal);
}else if(aVistaDinheiroPix){
    let valorFinal = (valorProduto - ((valorProduto * 15) / 100));
    console.log(valorFinal)
}else if(emDuasVezes){
    let valorFinal = valorProduto;
    console.log(valorFinal);
}else if(acimaDuasVezes){
    let valorFinal = (valorProduto + ((valorProduto * 10) / 100));
    console.log(valorFinal);
}