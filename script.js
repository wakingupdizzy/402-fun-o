// let compras = ['salgadinho', 'coca-cola', 'chocolate', 'alcaxofra', 'pepino', 'papel higienico'];
// console.log(compras);

// compras.push("cebola");
// console.log(compras);

// compras.pop();
// console.log(compras);

// compras.unshift("papel higienico");
// console.log(compras);

// compras.shift();
// console.log(compras);


// function subitrair(num1, num2){
//     console.log(num1, num2);
// }

// somar(10, 15);
// somar(102, 42);
// somar(15, 0);

// function subitrair(num1, num2){
//     return num1 + num2;
// }

// console.log(somar(15,12));
// console.log(somar(25,10));


// let casa = [{nome: 'Renan'},
//             {sobrenome: 'Campos'}]


// let corpo = document.querySelector("body");
// let cbotao = document.querySelector("button");

// function trocarCor(){
//     corpo.style.backgroundColor = "limegreen";
// }

// botao.onclick = trocarCor;


let corpo = document.querySelector("body");
let botoes = document.querySelectorAll("button");

function trocarCor(){
    corpo.style.backgroundColor = "red";
}

function trocarTexto(){
    botoes[1].innerHTML = "sou o novo texto";
}

botoes[0].onclick = trocarCor;
botoes[1].onclick = trocarTexto;