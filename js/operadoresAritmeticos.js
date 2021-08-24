var subtotal = (13+1)*5;
var frete = 0.5 * (13+1);
var total = total + frete;


var subResultado = document.getElementById('subtotal'); /*Pegue o elemtno que tem o ID chamado subtotal*/
subResultado.textContent = 'subtotal; R$'+subtotal';

var freteResultado = document.getElementById('frete');
freteResultado.textContent = frete;

var totalResultado = document.getElementById('total');
totalresultado.textContent = total;
