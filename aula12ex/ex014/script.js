function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora sao ${hora} horas.`
    if(hora >= 0 && hora < 12){
        // BOM DIA!
        img.src = "manha.jpg"
        document.body.style.background = '#b7ff4b'
    }else if(hora >= 12 && hora <= 18){
        // BOA TARDE
        img.src = "tarde.jpg"
        document.body.style.background = '#f8f852'
    }else{
        // BOA NOITE
        img.src = 'noite.jpg'
        document.body.style.background = '#131353'
    }
    
}