class ListaNegociacoes{

  constructor(){
    this._negociacoes = [];
  }
  adiciona(negociacao){
    this._negociacoes.push(negociacao);
  }
  get negocicoes(){
    return [].concat(this._negociacoes);
  }
}