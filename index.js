alert("Verifique sua média!");
let n1 = prompt("Digite sua nota, de 0 a 10:");
let n2 = prompt("Digite sua nota, de 0 a 10:");
let n3 = prompt("Digite sua nota, de 0 a 10:");
let n4 = prompt("Digite sua nota, de 0 a 10:");

let media =  (Number (n1) + Number (n2) + Number (n3) + Number (n4)) / 4;

if(n1 > 10 || n2 > 10 || n3 > 10 || n4 > 10){
    alert("Digite somente notas entre 0 e 10.");
    alert("Pressione F5 para recarregar a página!");
}else if(n1 < 0 || n2 < 0 || n3 < 0 || n4 < 0){
    alert("Digite somente notas entre 0 e 10.");
    alert("Pressione F5 para recarregar a página!");
}else if(media > 7){
    alert(`Você ficou com média ${media}`);
    alert("Resultado: APROVADO");
    alert("Pressione F5 para recarregar a página!");
}else if(media > 5 && media < 7){
    alert(`Você ficou com média ${media}`);
    alert("Resultado: EM RECUPERAÇÃO");
    alert("Pressione F5 para recarregar a página!");
}else if(media < 5){
    alert(`Você ficou com média ${media}`);
    alert("Resultado: REPROVADO");
    alert("Pressione F5 para recarregar a página!");
}
