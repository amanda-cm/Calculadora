const display = document.querySelector('#display');

function displaynum(n) {
    display.value = display.value += n;
}

/* event é um parametro do javascript que mostra os dados relacionados a um evento */
window.addEventListener("keydown", function(event) { 
    const digito = event.key;

    if ((digito >= 0 && digito <= 9) || digito == '.' || digito == '+' || digito == '-' || digito == '*' || digito == '/') {
        display.value += digito;
    }

    if ((digito == "Enter")) {
        calculateResult();
    }

    if ((digito == "Backspace")){
        clearDisplay();
    }
})

var calcHistory = [];
function calculateResult() {
    const calc = display.value;
    const result = eval(display.value);

    display.value = result;

    calcHistory.push({
        calc,
        result,
    });
    
    renderHistory();
}

/* innerHTML é usado para definir um novo conteúdo para um elemento */
const historicoDiv = document.querySelector('#historico');
function renderHistory() {
    historicoDiv.innerHTML = '';

    calcHistory.forEach(function (item) {
        historicoDiv.innerHTML += '<p>'
            + item.calc + ' = ' + item.result +
        '</p>';
    })
}

function clearDisplay() {
    display.value = '';
}

function clearH() {
    calcHistory = [];
    historicoDiv.innerHTML = '';
}