
function validarInteiro(valor){

  valor = parseInt(valor)
 
  if (isNaN(valor)) {
     return ""
  }else{
     return valor
  }
  
}

function comprovaValidoInteiro(){
  inteioValidado = validarInteiro(document.ob.obs.value)
  if (inteiroValidado == ""){
     
     alert ("Deve escrever um inteiro!")
     
     document.f1.numero.select()
     
     document.f1.numero.focus()
  }else
     document.f1.numero.value = inteiroValidado
}