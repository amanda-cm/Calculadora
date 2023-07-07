/* to fixed 2 é para aparecer somente 2 casas depois da virgula, replace troca o ponto pela virgula */
var calc = document.getElementById('calculo'); 
calc.addEventListener('click', function() { 
    const valor = document.getElementById('valor').value;
    const juros = (document.getElementById('juros').value) /100; 
    const tempo = document.getElementById('tempo').value;

    const total = valor * (1 + juros)**tempo; 

    const result = document.getElementById('total'); 
    result.innerHTML = ("R$ " + total.toFixed(2).replace('.', ',')); 
});