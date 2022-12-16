window.onload = function() {

  //Para mudar label do botão período de acordo com a seleção.

  const botaoPeriodo = document.querySelector('.botao-periodo');
  const listaPeriodo = document.querySelectorAll('.periodo');


  for (i = 0; i < listaPeriodo.length; i++) {
    
    let periodo = listaPeriodo[i]

    periodo.onclick = function() {
    botaoPeriodo.innerHTML = periodo.innerHTML;
    }
  
  }
  
}
