class Carro{
    marca;
    cor;
    gastoMedioKm;

    constructor (marca, cor, gastoMedioKm){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioKm = gastoMedioKm;
    }

    cauculoGastoPorKm(distanciaEmKm,precoCombustivel){
        return distanciaEmKm * this.gastoMedioKm * precoCombustivel;
    }
}

const uno = new Carro('Fiat','Prata',1/12);
console.log(uno.cauculoGastoPorKm(70, 5));
const palio = new Carro('Fiat', 'Vermelho', 1/10);
console.log(palio.cauculoGastoPorKm(70,5));