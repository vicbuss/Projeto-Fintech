window.onload = function() 
{

  var objBotaoPeriodo = document.getElementById("botao-periodo")

  var objJaneiro = document.getElementById("janeiro")
  var objFevereiro = document.getElementById("fevereiro")
  var objMarco = document.getElementById("marco")
  var objAbril = document.getElementById("abril")
  var objMaio = document.getElementById("maio")
  var objJunho = document.getElementById("junho")
  var objJulho = document.getElementById("julho")
  var objAgosto = document.getElementById("agosto")
  var objSetembro = document.getElementById("setembro")
  var objOutubro = document.getElementById("outubro")
  var objNovembro = document.getElementById("novembro")
  var objDezembro = document.getElementById("dezembro")

  objJaneiro.onclick = function() 
  {
    objBotaoPeriodo.innerHTML = objJaneiro.innerHTML
  } 

  objFevereiro.onclick = function() 
  {
    objBotaoPeriodo.innerHTML = objFevereiro.innerHTML
  }

  objMarco.onclick = function() 
  {
    objBotaoPeriodo.innerHTML = objMarco.innerHTML
  }

  objAbril.onclick = function() 
  {
    objBotaoPeriodo.innerHTML = objAbril.innerHTML
  }

  objMaio.onclick = function() 
  {
    objBotaoPeriodo.innerHTML = objMaio.innerHTML
  }

  objJunho.onclick = function() 
  {
    objBotaoPeriodo.innerHTML = objJunho.innerHTML
  }

  objJulho.onclick = function() 
  {
    objBotaoPeriodo.innerHTML = objJulho.innerHTML
  }

  objAgosto.onclick = function() 
  {
    objBotaoPeriodo.innerHTML = objAgosto.innerHTML
  }

  objSetembro.onclick = function() 
  {
    objBotaoPeriodo.innerHTML = objSetembro.innerHTML
  }

  objOutubro.onclick = function() 
  {
    objBotaoPeriodo.innerHTML = objOutubro.innerHTML
  }

  objNovembro.onclick = function() 
  {
    objBotaoPeriodo.innerHTML = objNovembro.innerHTML
  }

  objDezembro.onclick = function() 
  {
    objBotaoPeriodo.innerHTML = objDezembro.innerHTML
  }

}



/*$(".dropdown-menu li a").click(function(){
  
  $(".btn:first-child").html($(this).text()+' <span class="caret"></span>');
  
});*/
