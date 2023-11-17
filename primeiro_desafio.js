/* 
faça um programa para calcular o valor de uma viagem.

Você rerá 3 variaveis.
1 - Preço combustivel;
2 - Gasto médio de combustivel do carro po KM;
3 - Distância em KM da viagem;

*/

const precoCombustivel = 6.09;
const kmPorLitro = 15;
const distanciaEmKm = 301;

const litrosConsumidos = distanciaEmKm / kmPorLitro;
const valorGasto = litrosConsumidos * precoCombustivel;
console.log(valorGasto.toFixed(2));
