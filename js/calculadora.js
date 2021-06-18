let calculo;
let pantallaEntrada = document.getElementById("entrada")
let pantallaResultado = document.getElementById("resultado")

function mostrar(boton){
    let valor
    if (boton.innerHTML == "."){
        valor = boton.innerHTML
    }else{
        
        valor = parseFloat(boton.innerHTML);
    }

    if (pantallaEntrada.innerHTML == "No puedes dividir por CERO"){
        pantallaEntrada.innerHTML = ""
    }

    pantallaEntrada.innerHTML += valor
}

function operador(operador){
    pantallaResultado.innerHTML = pantallaEntrada.innerHTML + " " + operador.innerHTML
    let resultadoAux = parseFloat(pantallaEntrada.innerHTML)
    calculo = {
        resultadoAnterior: resultadoAux,
        operador: operador.innerHTML
    }
    pantallaEntrada.innerHTML = ""
}

function calcular() {
    
    let resultadoFinal;

    switch (calculo.operador) {
        case "+":
            resultadoFinal = calculo.resultadoAnterior + parseFloat(pantallaEntrada.innerHTML)
            break;
        case "-":
            resultadoFinal = calculo.resultadoAnterior - parseFloat(pantallaEntrada.innerHTML)
            break;
        case "*":
            resultadoFinal = calculo.resultadoAnterior * parseFloat(pantallaEntrada.innerHTML)
            break;
        case "/":
            if (parseFloat(pantallaEntrada.innerHTML) == 0) {
                resultadoFinal = "No puedes dividir por CERO"
            }else{
                resultadoFinal = calculo.resultadoAnterior / parseFloat(pantallaEntrada.innerHTML)
            }
            break;
    
        default:
            break;
    }

    let hayDecimal = (resultadoFinal + "").split(".")[1] > 1

    isNaN(resultadoFinal) ? resultadoFinal : 
                            hayDecimal ? resultadoFinal = resultadoFinal.toFixed(2) :
                            resultadoFinal
    calculo.resultadoAnterior = resultadoFinal
    

    pantallaResultado.innerHTML = ""
    pantallaEntrada.innerHTML = resultadoFinal
}

function reiniciar(){
    pantallaResultado.innerHTML = ""
    pantallaEntrada.innerHTML = ""

    calculo.resultadoAnterior = ""
    calculo.operador = ""
}