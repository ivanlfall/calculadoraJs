let calculo = {
    resultadoAnterior: "-",
    operador: ""
};
let esIgual = false
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
    let resultadoAux = parseFloat(pantallaEntrada.innerHTML)
    if(calculo.resultadoAnterior != "-"){

        calculo.resultadoAnterior = calcular()
        calculo.operador = operador.innerHTML
    }else{
        calculo.resultadoAnterior= resultadoAux
        calculo.operador= operador.innerHTML
    }

    pantallaResultado.innerHTML = calculo.resultadoAnterior + " " + operador.innerHTML
    pantallaEntrada.innerHTML = ""
}

function calcular() {
    
    let resultadoFinal;

    switch (calculo.operador) {
        case "+":
            esIgual ? resultadoFinal = calculo.resultadoAnterior + 0 :
            resultadoFinal = parseFloat(calculo.resultadoAnterior) + parseFloat(pantallaEntrada.innerHTML)
            break;
        case "-":
            esIgual ? resultadoFinal = calculo.resultadoAnterior - 0 :
            resultadoFinal = calculo.resultadoAnterior - parseFloat(pantallaEntrada.innerHTML)
            break;
        case "*":
            esIgual ? resultadoFinal = calculo.resultadoAnterior * 1 :
            resultadoFinal = calculo.resultadoAnterior * parseFloat(pantallaEntrada.innerHTML)
            break;
        case "/":
            if (esIgual){
                resultadoFinal = calculo.resultadoAnterior / 1
            }else if (parseFloat(pantallaEntrada.innerHTML) == 0) {
                resultadoFinal = "No puedes dividir por CERO"
            }else{
                resultadoFinal = calculo.resultadoAnterior / parseFloat(pantallaEntrada.innerHTML)
            }
            break;
    
        default:
            break;
    }


    esIgual = false
    return resultadoFinal
    
}

function btnIgual(){

    let resultadoFinal = calcular()

    let hayDecimal = (resultadoFinal + "").split(".")[1] > 1

    isNaN(resultadoFinal) ? resultadoFinal : 
                            hayDecimal ? resultadoFinal = resultadoFinal.toFixed(2) :
                            resultadoFinal
    calculo.resultadoAnterior = resultadoFinal
    

    pantallaResultado.innerHTML = ""
    pantallaEntrada.innerHTML = resultadoFinal
    esIgual = true
}

function reiniciar(){
    pantallaResultado.innerHTML = ""
    pantallaEntrada.innerHTML = ""

    calculo.resultadoAnterior = "-"
    calculo.operador = ""
    esIgual = false
}