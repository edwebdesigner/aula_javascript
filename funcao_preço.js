 

function aplicarDesconto(valor, desconto){
    return (valor - (valor * (desconto / 100)))
}

function aplicarJuros(valor, desconto){
    return (valor + (valor * (desconto / 100)))
}

const precoEtiqueta = 100;
const formaPgmt = 3;

if (formaPgmt === 1) {
    console.log(aplicarDesconto(precoEtiqueta, 10));
}


else if(formaPgmt === 2) {
    console.log(aplicarDesconto(precoEtiqueta, 15));
}


else if (formaPgmt === 3) {
    console.log(precoEtiqueta);
}


else  {
    console.log(aplicarJuros(precoEtiqueta, 10));
}

