
function insereNumeroNoVisor(botao, visor) {

    if (botao.value == "+" || botao.value == "-" || botao.value == "*" || botao.value == "/") {

        if (visor.value[visor.value.length-1] == "+" || visor.value[visor.value.length-1] == "-" || visor.value[visor.value.length-1] == "*" || visor.value[visor.value.length-1] == "/") {
            visor.value.slice(1);
        } else {
            visor.value += botao.value;
        }

    } else {
        visor.value += botao.value;
    }

}

const resultadoDasOperacoes = (visor) => {

    try {
        //Utilizando a função eval(expressão)
        visor.value = eval(visor.value);
    } catch (error) {

        if (visor.value[visor.value.length] == "+" || visor.value[visor.value.length] == "-" || visor.value[visor.value.length] == "*" || visor.value[visor.value.length] == "/") {
            visor.value.slice(0);
        } else {
            visor.value += botao.value;
        }

    }

}