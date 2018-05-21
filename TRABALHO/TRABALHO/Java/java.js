//Exercicio 01- Subtração
function subtrai() {
    var valor1, valor2;

    valor1 = document.getElementById("valor1").value;
    valor2 = document.getElementById("valor2").value;

    // nao se esqueca do parseFloat
    document.getElementById("resultado").innerHTML = "O resultado da subtração é: " + (parseFloat(valor1) - parseFloat(valor2));
}
//Exercicio 02- Multiplicação
function multiplicar() {
    var n1 = document.getElementById("mult-1").value;
    var n2 = document.getElementById("mult-2").value;
    var n3 = document.getElementById("mult-3").value;

    document.getElementById("mult-resul").innerHTML = "O resultado da multiplicação é: " + n1 * n2 * n3;
}

//Exercicio 03- Divisão
function divisao() {

    var n1 = document.getElementById("div-1").value;
    var n2 = document.getElementById("div-2").value;


    document.getElementById("div-resul").innerHTML = "O resultado da divisão: " + n1 / n2;
}

//Exercicio 04- Notas
function notas() {
    var n1 = document.getElementById("nota-1").value
    var n2 = document.getElementById("nota-2").value
    
    document.getElementById("nota-resul").innerHTML = "A média destas 2 notas é: " + ((n1 * 2) + (n2 * 3)) / 5;
}

//Exercicio 05- Desconto
function desconto() {
    var n1 = document.getElementById("valor-1").value;

    document.getElementById("desc-resul").innerHTML = "O valor com 10% de desconto é: " + (n1 - (n1 * 10 / 100));

}
//Exercicio 06- Salario 4%
function salario04() {
    var n1 = document.getElementById("salario-04").value;
    
    document.getElementById("sala04-resul").innerHTML = "O salário com acrescimo de 4% é: R$:" + Number(n1) + (Number(n1) * 0.04);
}
//Exercicio 07- Peso
function peso() {
    var n1 = document.getElementById("peso-1").value;

    document.getElementById("peso-resul-1").innerHTML += "Peso atual:  " + n1 + " Kg.<br>";
    document.getElementById("peso-resul-2").innerHTML += "Peso se engordar 15%:  " + (n1 + (n1 * 15 / 100)) + " Kg.<br>";
    document.getElementById("peso-resul-3").innerHTML += "Peso se emagrecer 20%:  " + (n1 - (n1 * 20 / 100)) + " Kg.";
}

//Exercicio 08- Peso em gramas
function pesog() {
    var n1 = document.getElementById("peso-01").value;

    document.getElementById("gramas").innerHTML = "O peso equivale a: " + n1 * 1000 + " gramas."
}

//Exercicio 09- Trapézio
function trapezio() {
    var n1 = document.getElementById("var-1").value;
    var n2 = document.getElementById("var-2").value;
    var n3 = document.getElementById("var-3").value;

    document.getElementById("trap-resul").innerHTML = "A área do trapézio é: " + ((n1 + n2) * n3) / 2 + " cm."
}
//Exercicio 10- Quadrado
function quadrado() {
    var n1 = document.getElementById("lado-1").value;

    document.getElementById("lado-resul").innerHTML = "A área do quadrado é: " + n1 * n1 + " cm.";
}

//Exercicio 11- Losango
function losango() {
    var n1 = document.getElementById("losango-1").value;
    var n2 = document.getElementById("losango-2").value;

    document.getElementById("losango-resul").innerHTML = "A área do losango é: " + (n1 * n2) / 2 + " cm.";
}

//Exercicio 12- Salários
function salario() {
    var n1 = document.getElementById("sala-1").value;
    var n2 = document.getElementById("sala-2").value;

    document.getElementById("sala-resul").innerHTML = "O funcionário recebe: " + parseInt((n2 / n1)) + " sálarios completos.<br>"
    document.getElementById("sala-resul2").innerHTML = "Ou então: " + ((n2 / n1)) + " sálarios exatos."
}

//Exercicio 13- Tabuada
function tabuada() {
    var n1 = document.getElementById("number-1").value;
    
    document.getElementById("tabuada-resul").innerHTML = "O valor é:"
}

//Exercicio 14- Idade
function idade(){
    var n1 = document.getElementById("data-1").value;
    
    document.getElementById("data-resul").innerHTML = "Esta pessoa tem: "  + (2018 - n1) + " anos de idade. <br>"
    document.getElementById("data-resul").innerHTML += "Esta pessoa tem: " + ((2018 - n1) * 12) + " meses de idade. <br />";
    document.getElementById("data-resul").innerHTML += "Esta pessoa tem: " + ((2018 - n1) * 365) + " dias de idade. <br />";
    document.getElementById("data-resul").innerHTML += "Esta pessoa tem: " + ((2018 - n1) * (12 * 4)) + " semanas de idade. <br />";
}

//Exercicio 15- Contas
function contas(){
    var n1 = document.getElementById("contas-1").value;
    var n2 = document.getElementById("contas-2").value;
    var n3 = document.getElementById("contas-3").value;
    
    document.getElementById("conta-resul").innerHTML = "O salário de João é: R$" + Number(n1).toFixed(2) + ".<br />" +
        "Conta 1 atrasada: R$" + Number(n2).toFixed(2) + ".<br />" +
        "Conta 2 atrasada: R$" + Number(n3).toFixed(2) + ".<br />" +
        "O valor restante para João é: R$" + (n1 - (((Number(n2) * 0.02) + Number(n2)) + ((Number(n3) * 0.02) + Number(n3)))) + ".<br />";
}
