let nomeHeroi = "Uilas"
let nivelHeroi = 1001;
let ranking = ""

if(nivelHeroi <= 1000) {
    ranking = "Nivel Ferro"
}else if (nivelHeroi >=1001 && nivelHeroi <=2000){
    ranking = "Nivel Bronze"
}else if (nivelHeroi >=2001 && nivelHeroi <=5000){
    ranking = "Nivel Prata"
}else if (nivelHeroi >=5001 && nivelHeroi <=7000){
    ranking = "Nivel Ouro"
}else if (nivelHeroi >=7001 && nivelHeroi <=8000){
    ranking = "Nivel Platina"
}else if (nivelHeroi >=8001 && nivelHeroi <=9000){
    ranking = "Nivel Ascendente"
}else if (nivelHeroi >=9001 && nivelHeroi <=10000){
    ranking = "Nivel Imortal"
}else if (nivelHeroi >=10001){
    ranking = "Nivel Radiante"
}

console.log("O Héroi de nome: " + nomeHeroi, "está no nivel de " + ranking)