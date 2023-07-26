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