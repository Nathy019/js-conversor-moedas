function ConverterDeDolarParaReal(){
    //1 - Pegar o valor que foi digitado no campo o #valor
    let valorEmDolar = document.getElementById("valor").value
    //2 - Converter valorde dólar para real
    let valorConvertido = valorEmDolar * 5.3
    //3 - Mostrar o valor no h2 com id #valorConvertido
    document.getElementById("valorConvertido").innerText=valorConvertido.toFixed(2)
 }