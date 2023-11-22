class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
        
    }

    calcularImc(){
        return this.peso / (this.altura * this.altura);
    }

    classificarImc(){
        const imc = this.calcularImc();

if (imc < 18.5) {
    console.log('Abaixo do peso')
}

else if (imc >= 18.5 && imc <= 25) 
{
    return ('Peso normal');
}

else if (imc >= 25 && imc <= 30) 
{
    return ('Acima do peso');
}

else if (imc >= 30 && imc <= 40) 
{
    return ('Obeso');
}

else  
{
    return ('Obesidade grave');
}
    }
}

const jose = new Pessoa('Jose', 70, 1.70);
console.log(jose.nome, jose.classificarImc());
const renata = new Pessoa('renata', 80, 1.48);
console.log(renata.nome, renata.classificarImc());
const maria = new Pessoa('maria', 50, 1.60);
console.log(maria.nome, maria.classificarImc());