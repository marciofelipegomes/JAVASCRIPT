function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
    
    msg.innerHTML=`Neste momento, a hora é: ${hora} horas.`
    
    if (hora >= 0 && hora < 12) {
        img.src='dia.png'
        document.body.style.background='#f8e2d1'
        msg.innerHTML+="<p><br>Bom dia!</p>"
    } else if (hora >= 12 && hora < 18){
        img.src='tarde.png'
        document.body.style.background='#f5a95a'
        msg.innerHTML+="<p><br>Boa tarde!</p>"
    } else {
        img.src='noite.png'
        document.body.style.background='#394c53'
        msg.innerHTML+="<p><br>Boa noite!</p>"
    }
}