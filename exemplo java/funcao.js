function repeat() {
    let num = parseInt(document.getElementById("numero").value)
    for (let i = 0; i < num; i++) {
        alert("Vc clicou enviar" + num + "vezez!")
    }
}

function soma() {
    let num1 = parseInt(document.getElementById("numero_1").value)
    let num2 = parseInt(document.getElementById("numero_2").value)

    let resultado_soma = num1 + num2

    document.getElementById("resultado").innerHTML = resultado_soma
}

function calculo() {
    let num1 = parseInt(document.getElementById("numero_1").value);
    let num2 = parseInt(document.getElementById("numero_2").value);

    let resultado = 0;

    if (num1 < 0 || num2 < 0) {
        alert("Por favor, insira números não negativos.");
        return; // 
    }

    resultado = num1 + num2;

    document.getElementById("resultado").innerHTML = "Resultado da soma: " + resultado;
}
