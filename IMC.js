let peso = parseFloat(prompt("digite o seu peso (kg): "))
let altura = parseFloat(prompt("Informe sua altura (m): "))

let resultado = calcularIMC(peso, altura)

function calcularIMC(peso, altura){
    return peso / (altura * altura)
}

function classificarIMC(IMC){
    if(IMC < 18.5) {
         alert("Seu IMC:" + IMC + "Abaixo do peso")
    } else if (IMC > 18.5 && IMC < 24.9){
         alert("Seu IMC:" + IMC + "Peso Adequado")
    } else if (IMC > 24.9 && IMC < 29.9){
         alert("Seu IMC:" + IMC + "SobrePeso")
    } else if (IMC > 29.9){
         alert("Seu IMC:" + IMC + "Obeso")
    } else {
        alert("Não conseguimos calcular seu IMC")
    }
} 
 function Relatorio(PE,AL) {
     let IMC = calcularIMC(PE,AL)
     classificarIMC(IMC)
 }
 Relatorio(peso,altura)