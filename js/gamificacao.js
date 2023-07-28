/*Gamificação Chuveiro*/
var banho = document.getElementById('banho');
var cont = 1;
var litros = 10;

banho.addEventListener('mouseenter',entrou);
banho.addEventListener('click',clicou)


function entrou(){
  banho.innerHTML = 'Cada clique = 1 minuto no chuveiro!'
}

function clicou(){
  banho.innerHTML = `${cont}min = ${litros}litros`
  cont++
  litros = 10*cont
}

/*Gamificação Chuveiro*/

/*Gamificação Luz*/
function calcular(){
  var valorInput = document.getElementById('valor').value
  var resposta = document.getElementById('resposta')
  
  resposta.innerHTML = valorInput;

  if (valorInput > 0 && valorInput < 10) {
    resposta.innerHTML = 'Vc esta sendo bem economico';
  } else if (valorInput >= 10 && valorInput < 20) {
    resposta.innerHTML = 'Vc está sendo moderado na sua economia';
  } else {
    resposta.innerHTML = 'Vc está gastando muito';
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
  resultado.innerHTML = custo

  if (custo >0 && custo <60){
    resultado.innerHTML = `O valor que gasta por ano é ${custoAnual}.Parabéns, vc está mantendo sua economia em ordem.`
  } else if (custo >=60 && custo <=120){
    resultado.innerHTML = `O valor que vc gasta por ano é ${custoAnual}. Você pode chegar a um gasto de até ${economia}, que equivale a uma economia de até ${porcentagem} todo ano! Aqui estão algumas soluçoes para que você possa gaurdar mais dinheiro:`
  } else{
    resultado.innerHTML = `O valor que vc gasta por ano é ${custoAnual}. Você está gastando muito. Se tomar medidas mais preventivas, vc pode estar salvando até ${porcentagem} reais todo ano. Em 10 anos, você pode comprar...`
  }
}
/*Gamificação Economia para o seu bolso conta de Luz*/
