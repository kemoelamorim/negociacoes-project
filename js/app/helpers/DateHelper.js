class DateHelper{
  
  constructor(){
    throw new Error('DateHelper não pode ser instanciada')
  }
  
  static dataPataTexto(data){
    return `${data.getDate()}/${(data.getMonth()+1)}/${data.getFullYear()}`
  }
  static textoParaDate(texto){
    if(!/\d{4}-\d{2}-\d{2}/.test(texto))
      throw new Error("Deve ser usado o formato aaaa-mm-dd")
    return new Date(...texto.split('-').map((item, indice) => item - indice % 2))
  }
}