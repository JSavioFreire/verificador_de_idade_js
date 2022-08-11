var agora = new Date()
var bt = document.querySelector('#bt')
bt.addEventListener('click', clicou)


function clicou(){
    var nasc = document.querySelector('#dia').valueAsDate //Para salvar o valor como valor de data, coloco esse valueAsDate
    var dia = nasc.getUTCDate() //sem o UTC ele conta de 0 a 30, ja com UTC, comeca no 1
    var mes = nasc.getMonth()   //aqui conta o mes de 0 a 11
    var ano = nasc.getFullYear()
    var dianow = agora.getDate()
    var mesnow = agora.getMonth()
    var anonow = agora.getFullYear()
    
    var resultado = document.querySelector('#resultado')
  
    var idadeAno = anonow - ano

    if(mes < mesnow || mes == mesnow && dia <= dianow){//Nesse caso, o niver ja passou ou é hoje. 
        resultado.innerHTML = `<p>A idade é <strong>${idadeAno}</strong></p>`
    }else{
        resultado.innerHTML = `<p>A idade é <strong>${idadeAno - 1}</strong></p>`
    }
    
    var foto = document.querySelector('#foto')
    var sexo = document.getElementsByName('radsex') //queryselectorall para selecionar todos os radsex

    if(sexo[0].checked){        //sexo[0] é o primeiro marcador

        if(idadeAno <= 2){
            foto.src = "fotos/2.jpg"
        }else if(idadeAno <= 6){
            foto.src = "fotos/5menino.jpg"
        }else if(idadeAno <= 12){
            foto.src = "fotos/12menino.jpg"
        }else if(idadeAno <= 25){
            foto.src = "fotos/18menino.jpg"
        }else if(idadeAno <= 50){
            foto.src = "fotos/30homem.jpg"
        }else if(idadeAno > 50){    
            foto.src = "fotos/60homem.jpg"

        }}else{       //sexo[1]

        if(idadeAno <= 2){
            foto.src = "fotos/2.jpg"
        }else if(idadeAno <= 6){
            foto.src = "fotos/5menina.jpg"
        }else if(idadeAno <= 12){
            foto.src = "fotos/12menina.jpg"
        }else if(idadeAno <= 25){
            foto.src = "fotos/18menina.jpg"
        }else if(idadeAno <= 50){
            foto.src = "fotos/30mulher.jpg"
        }else if(idadeAno > 50){
            foto.src = "fotos/60mulher.jpg"
        }

}
}
