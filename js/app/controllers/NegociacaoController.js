class NegociacaoController{
  
  constructor(){
    
    let $ = document.querySelector.bind(document)
    this._inputData = $("#data")
    this._inputQuantidade = $("#quantidade")
    this._inputValor = $("#valor")
    this._listaNegociacoes = new ListaNegociacoes()
    this._negociacoesView = new NegociacoesView($("#negociacoesView"))
    this._negociacoesView.update(this._listaNegociacoes.negocicoes)
    this._mensagem = new Mensagem()
    this._mensagemView = new MensagemView($("#mensagem-view"))
    this._mensagemView.update(this._mensagem.texto)
  }
  
  adiciona(event){
    event.preventDefault()
    this._listaNegociacoes.adiciona(this._criaFormulario())
    this._negociacoesView.update(this._listaNegociacoes.negocicoes)
    this._mensagem.texto = "Negociação adicionada com sucesso!"
    this._mensagemView.update(this._mensagem.texto)
    this._limpaFormulario()
  }

  _limpaFormulario(){
    this._inputData.value = '';
    this._inputQuantidade.value = 1;
    this._inputValor.value = "0.0";
    
    this._inputData.focus();
  }
  
  _criaFormulario(){
    return new Negociacao(
      DateHelper.textoParaDate(this._inputData.value),
      this._inputQuantidade.value,
      this._inputValor.value
    )
  }

}