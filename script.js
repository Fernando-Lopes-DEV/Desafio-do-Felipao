//criando variaveis
let nome = "'-NandoXD-'"
let nivel = 50000000
const texto = "Este heroi, gloriosamente chamado "
const textoNivel = ", possui nivel "

//Utilizando o switch case

if(nivel <= 1000){
    console.log(texto + nome + textoNivel + nivel + ", por isso sua classificação é de FERRO")
}
else if(nivel >=1001 && nivel <=2000){
    console.log(texto + nome + textoNivel + nivel + ", por isso sua classificação é de BRONZE")
}
else if(nivel >= 2001 && nivel <= 5000){
    console.log(texto + nome + textoNivel + nivel + ", por isso sua classificação é de PRATA")
}
else if(nivel >= 5001 && nivel <= 7000){
    console.log(texto + nome + textoNivel + nivel + ", por isso sua classificação é de OURO")
}
else if(nivel >= 7001 && nivel <= 8000){
    console.log(texto + nome + textoNivel + nivel + ", por isso sua classificação é de PLATINA")
}
else if(nivel >= 8001 && nivel <= 9000){
    console.log(texto + nome + textoNivel + nivel + ", por isso sua classificação é de ASCENDENTE")
}
else if(nivel >= 9001 && nivel <= 10000){
    console.log(texto + nome + textoNivel + nivel + ", por isso sua classificação é de IMORTAL")
}
else if(nivel >10001){
    console.log(texto + nome + textoNivel + nivel + ", por isso sua classificação é de RADIANTE")
}

