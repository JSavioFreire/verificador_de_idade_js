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
    var corrigindoIdadeAno = idadeAno - 1
    if(mes < mesnow || mes == mesnow && dia <= dianow){//Nesse caso, o niver ja passou ou é hoje. 
        resultado.innerHTML = `<p>A idade é <strong>${idadeAno}</strong></p>`
    }else{
        resultado.innerHTML = `<p>A idade é <strong>${idadeAno - 1}</strong></p>`
    }
    if(idadeAno < 2){
        foto.img
    }
}







