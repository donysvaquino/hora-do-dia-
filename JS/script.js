var img = document.querySelector('img#imagem');
var horario = document.querySelector('h2#horario');
var data = new Date();
var hora
var hora = data.getHours();


if (hora >= 5 && hora<12){
   horario.innerHTML=`Bom dia! Agora são ${hora} horas da manhã!`
   img.src = './IMG/card-dia.jpg'
   document.body.style.backgroundImage = 'url(./IMG/back-dia.jpg)'
}
 else if (hora <18 && hora >=12){
    horario.innerHTML=`Boa tarde! Agora são ${hora} horas da tarde!`
    img.src = './IMG/card-tarde.jpg'
    document.body.style.backgroundImage = 'url(./IMG/back-tarde.jpg)'
} 
else if(hora>=18 || hora <5){
    horario.innerHTML=`Boa noite! Agora são ${hora} horas da noite!`
    img.src = './IMG/card-noite.jpg'
    document.body.style.backgroundImage = 'url(./IMG/back-noite.jpg'
}
