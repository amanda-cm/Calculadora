/* change é disparado quando ocorre a seleção em uma das opções do select */
var select = document.querySelector('.op'); 
select.addEventListener('change', function() { 
    var valor = this.value;  
    window.location.href = valor;
});