"use strict";

//recupero el elemento y medidas de la tarjeta
const card = document.getElementById('card');

const height = card.clientHeight;   // guarda el height definido por css del card
const width = card.clientWidth;     //guarda el width definido por css del card


//escucho el evento cuando el cursor está dentro de la tarjeta
card.addEventListener('mouseover', (event) =>{
    const { layerX , layerY} = event;                       //recupero coordenadas
    const rotationY = ((layerX - width/2) / width * 40);     // determino el ángulo de rotación respecto de y
    const rotationX= ((layerY - height/2) / height * 40);   // determino el ángulo de rotación  respecto de x

    const transformCard = `perspective(600px) scale(1.2)  rotateX(${rotationX}deg) rotateY(${rotationY}deg)`; //define transformación a aplicar
    // perspectiva , escala que aumenta un 20% el tamaño de la imagen,  ángulo de rotación respecto de x y angulo de rotación reespecto de y
    card.style.transform =  transformCard;  // aplica estilos de transformación a card mediante la propiedad "transform"
})

//escucho el evento cuando el cursor está fuera de la tarjeta
card.addEventListener('mouseout', () => {
    card.style.transform = `perspective(0px) scale(1)  rotateX(0deg) rotateY(0deg)`; //aplica estilos de transformación 
    //sin perspectiva, tamaño original, sin ángulos de rotación
})
//Fin main