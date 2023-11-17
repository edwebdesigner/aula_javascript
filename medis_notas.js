const nota1 = 7;
const nota2 = 3; 
const nota3 = 7;
const media = (nota1 + nota2 + nota3) / 3;

console.log(media.toFixed(2));

if (media < 5) {
    console.log('Reprovação');
}

else if(media >= 5 && media <= 7)
{
    console.log('Recuperação');
}

else 
{
    console.log('Aprovação');
}
