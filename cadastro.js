 
/*-Se a data do evento for posterior à data atual, permitir o evento; senão, alertar que o cadastro não será permitido por data inválida.

-Se o participante for maior de 18 anos, permitir o cadastro; senão, alertar que o cadastro não é permitido pela idade.
-Listar participantes e palestrantes por evento.
-Enquanto a quantidade de participantes for inferior a 100, permitir cadastro; senão, alertar que o cadastro não será permitido por ter excedido o limite.*/






function validacaoData (str){
    
    var data = new Date(str.split("/").reverse().join("/"));
 
 return data > new Date()
 }   // Aqui nesse trecho criei uma função para comparar a data que o usuario quer cadastrar o evento com a data atual do sistema.
 
 var dataEvento = validacaoData("13/09/2021") // Data de entrada para validação do evento. 
 var idadeParticipantes = 17 // idade 
 var listaDeParticipantes = ["Jão","Ana","Pedro","Claudio"].length
 
  if(dataEvento == true){
      console.log("Permitir o evento !")
  }else{
      console.log("Data inválida")
  }
  if(idadeParticipantes >= 18 ){
      console.log("Permitir o cadastro !")
  }else{
      console.log("Cadastro não é permitido pela idade !")
     }
  if(listaDeParticipantes < 100){
      console.log("Permitir o cadastro !")
  }else{
      console.log("Cadastro não será permitido por ter excedido o limite !")
  }   