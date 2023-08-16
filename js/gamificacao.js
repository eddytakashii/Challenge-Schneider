/*Gamificação Banho*/
var banho = document.getElementById('banho');
var cont = 1;
var litros = 10;

banho.addEventListener('mouseenter',entrou);
banho.addEventListener('mouseout',saiu);
banho.addEventListener('click',clicou);


function entrou(){
  banho.innerHTML = '1 clique = 1 minuto no chuveiro!'
}

function saiu(){
  banho.innerHTML = 'Clique aqui'
}

function clicou(){
  banho.innerHTML = `${cont}min = ${litros}litros`
  cont++
  litros = 9*cont
}

/*Gamificação Banho*/

/*Gamificação Luz*/
function calcular(){
  var valorInput = document.getElementById('valor').value
  var resposta = document.getElementById('resposta')
  
  resposta.innerHTML = valorInput;

  if (valorInput > 0 && valorInput < 600) {
    resposta.innerHTML = 'Em muitas regiões, um consumo mensal de energia elétrica de até cerca de 500 kWh a 600 kWh pode ser considerado baixo para uma casa de tamanho médio. Isso, é claro, pode variar com base nas condições locais.';
  } else if (valorInput >= 600 && valorInput < 1000) {
    resposta.innerHTML = 'Um consumo médio mensal de energia elétrica, que incluiria a maioria das residências, geralmente varia entre 600 kWh a 1000 kWh, dependendo das mesmas considerações regionais e fatores já mencionados.';
  } else {
    resposta.innerHTML = 'Um consumo mensal de energia elétrica acima de 1000 kWh a 1500 kWh (ou mais) pode ser considerado alto para uma casa de tamanho médio, novamente dependendo das condições locais.';
  }
  
}
/*Gamificação Luz*/

/*Gamificação Economia para o seu bolso conta de Luz*/
function custoMensal(){
  var custo = document.getElementById('custo').value
  var resultado = document.getElementById('result')
  var custoAnual = 12*custo
  var economia = (12*custo) - (20*(12*custo)/100);
  var porcentagem = (20*(12*custo)/100);
  var dezanos = 10*porcentagem
  resultado.innerHTML = custo

  if (custo >0 && custo <220){
    resultado.innerHTML = `O valor que gasta por ano é ${custoAnual} reais.Parabéns, você está mantendo sua economia em ordem.`
  } else if (custo >=220 && custo <=450){
    resultado.innerHTML = `O valor que você gasta por ano é ${custoAnual} reais. Tomando algumas medidas preventivas, você pode chegar a um gasto de até ${economia} reais, que equivale a uma economia de até ${porcentagem} reais todo ano!`
  } else{
    resultado.innerHTML = `O valor que você gasta por ano é ${custoAnual} reais. Você está gastando muito. Se tomar medidas mais preventivas, você pode estar salvando até ${porcentagem} reais todo ano! Imagine daqui a 10 anos, você estaria salvando cerca de ${dezanos} reais! `
  }
}
/*Gamificação Economia para o seu bolso conta de Luz*/
