const precoEtiqueta = 100;
const formaPgmt = 4;

if (formaPgmt === 1) {
    console.log(precoEtiqueta - (precoEtiqueta * 0.1));
}

else if (formaPgmt === 2) {
    console.log(precoEtiqueta - (precoEtiqueta * 0.15));
}

else if (formaPgmt === 3) {
    console.log(precoEtiqueta);
}

else {
    console.log(precoEtiqueta + (precoEtiqueta * 0.1));
}