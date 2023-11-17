/* Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
1 - Preço do etanol;
2 - Preço da Gasolina;
3 - O tipo de combustível que está no seu carro;
4 - Gasto medio de combustivel do carro po km;
5 - Distancia em km da viagem;
Imprima no console o valor que sera gasto para realizar esta viagem.
*/

const precoGasolina = 6.09;
const precoEtanol = 5.45;
const kmPorLitro = 10;
const distanciaEmKm = 100;
const tipoCombustivel = 'Etanol'

const litrosConsumidos = distanciaEmKm / kmPorLitro;

if (tipoCombustivel === 'Etanol') {
    const valorGasto = litrosConsumidos * precoEtanol;
    console.log(valorGasto.toFixed(2));
}

else  {
    const valorGasto = litrosConsumidos * precoGasolina;
    console.log(valorGasto.toFixed(2));
}

