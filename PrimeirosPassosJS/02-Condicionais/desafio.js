
const precoEtanol = 3;
const precoGasolina = 4;

const tipoCombustivel = false;
const gastoMedioPorKm = 10;
const distanciaViagem = 100;

if (tipoCombustivel) {
    console.log((distanciaViagem / gastoMedioPorKm) * precoEtanol);
} else {
    console.log((distanciaViagem / gastoMedioPorKm) * precoGasolina);
}