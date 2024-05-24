let nomeHeroi = "Uilas"
let nivelHeroi = 5000;
let ranking = ""

if(nivelHeroi <= 1000) {
    ranking = "Nivel Ferro. Vá em frente e enfrente novos desafios para subir seu nivel!"
}else if (nivelHeroi >=1001 && nivelHeroi <=2000){
    ranking = "Nivel Bronze. Vá em frente e enfrente novos desafios para subir seu nivel!"
}else if (nivelHeroi >=2001 && nivelHeroi <=5000){
    ranking = "Nivel Prata. Vá em frente e enfrente novos desafios para subir seu nivel!"
}else if (nivelHeroi >=5001 && nivelHeroi <=7000){
    ranking = "Nivel Ouro. Vá em frente e enfrente novos desafios para subir seu nivel!"
}else if (nivelHeroi >=7001 && nivelHeroi <=8000){
    ranking = "Nivel Platina. Vá em frente e enfrente novos desafios para subir seu nivel!"
}else if (nivelHeroi >=8001 && nivelHeroi <=9000){
    ranking = "Nivel Ascendente. Vá em frente e enfrente novos desafios para subir seu nivel!"
}else if (nivelHeroi >=9001 && nivelHeroi <=10000){
    ranking = "Nivel Imortal. Vá em frente e enfrente novos desafios para subir seu nivel!"
}else if (nivelHeroi >=10001){
    ranking = "Nivel Radiante. Você atingiu o nível maximo, Parabens!"
}

console.log("O Héroi de nome: " + nomeHeroi, "está no nivel de " + ranking)