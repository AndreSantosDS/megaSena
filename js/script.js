const container1 = document.getElementById("container1")
const btnSortear = document.getElementById("btn-sortear")

const form = document.getElementById("form")
const numero1 = document.getElementById("numero1")
const numero2 = document.getElementById("numero2")
const numero3 = document.getElementById("numero3")
const numero4 = document.getElementById("numero4")
const numero5 = document.getElementById("numero5")
const numero6 = document.getElementById("numero6")

let numeros = []
let numerosEscolhidosPeloUsuario = []

form.addEventListener("submit", function(e){
    e.preventDefault()
    numerosEscolhidosPeloUsuario = [
        parseInt(numero1.value),
        parseInt(numero2.value),
        parseInt(numero3.value),
        parseInt(numero4.value),
        parseInt(numero5.value),
        parseInt(numero6.value)
    ];
})

btnSortear.addEventListener("click", function(){
    sortearNumeros(6, 1, 60)
    numerosSorteados()
    if(numeros.includes(numerosEscolhidosPeloUsuario)){
        let voceGanhou = document.createElement("p");
        voceGanhou.classList.add("voceGanhou");
        voceGanhou.textContent = `Parabéns! Você é o novo ganhador da MegaSena`;
        container1.appendChild(voceGanhou);
    }else{
        let vocePerdeu = document.createElement("p");
        vocePerdeu.classList.add("vocePerdeu");
        vocePerdeu.textContent = `Infelizmente não foi dessa vez`;
        container1.appendChild(vocePerdeu);
    }
    btnSortear.disabled = true;
})
function sortearNumeros(quantidade, min, max){
    
    while (numeros.length < quantidade) {
        let numero = Math.floor(Math.random() * (max - min + 1)) + min;
        if (!numeros.includes(numero)) {
            numeros.push(numero);
        }
    }

    return numeros;
}
function numerosSorteados(){
    let numerosContainer = document.createElement("div");
    numerosContainer.classList.add("numeros-soteados");
    for (let i = 0; i < numeros.length; i++) {
        let minhaDiv1 = document.createElement("div");
        minhaDiv1.textContent = numeros[i];
        numerosContainer.appendChild(minhaDiv1); 
    }
    container1.appendChild(numerosContainer);
}