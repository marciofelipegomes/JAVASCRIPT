function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert("[ERRO] Tente novamente")
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero =''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'homem'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'foto-crianca-h.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'foto-jovem-h.png')
            } else if (idade < 50){
                //Adulto
                img.setAttribute('src', 'foto-adulto-h.png')
            } else {
                //idoso
                img.setAttribute('src', 'foto-idoso-h.png')
            }
         } else if (fsex[1].checked) {
            genero = 'mulher'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'foto-crianca-m.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'foto-jovem-m.png')
            } else if (idade < 50){
                //Adulto
                img.setAttribute('src', 'foto-adulto-m.png')
            } else {
                //idoso
                img.setAttribute('src', 'foto-idosa-m.png')
            }
       }

    res.innerHTML=`Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)
           }

}
        //res.style.textAlign = 'center' - sugestão para centralizar pelo Js, mas eu já o fiz pelo CSS.

      
   