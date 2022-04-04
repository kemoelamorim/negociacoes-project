class MensagemView extends View{
  
  template(mensagem){
    return mensagem ? `<p class="alert alert-info">${mensagem}</p>`: ""
  }

}