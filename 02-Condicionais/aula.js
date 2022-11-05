

const numero = 0;
const eNumeroPar = (numero % 5) === 0;

if (numero === 0){
    console.log('O número é invalido');
} else if (eNumeroPar){
    console.log('Par');
} else {
    console.log('Impar');
}