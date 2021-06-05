const slides = document.querySelector("#slides");
let sliderSection = document.querySelectorAll(".slider__section");
let sliderSectionLast = sliderSection[sliderSection.length -1];

const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");

slides.insertAdjacentElement("afterbegin", sliderSectionLast);

function moverDerecha() {
    let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
    slides.style.marginLeft = "-100%";
    slides.style.transition = "all 0.5s";
    setTimeout(function(){
        slides.style.transition = "none";
        slides.insertAdjacentElement("beforeend", sliderSectionFirst);
        slides.style.marginLeft = "0";
    }, 500);
}


function moverIzquierda() {
    let sliderSection = document.querySelectorAll(".slider__section");
    let sliderSectionLast = sliderSection[sliderSection.length -1];
    slides.style.marginLeft = "0";
    slides.style.transition = "all 0.5s";
    setTimeout(function(){
        slides.style.transition = "none";
        slides.insertAdjacentElement("afterbegin", sliderSectionLast);
        slides.style.marginLeft = "-100";
    }, 500);
}

btnRight.addEventListener("click", function(){
    moverDerecha();

})

btnLeft.addEventListener("click", function(){
    moverIzquierda();

})

setInterval(function(){
    moverDerecha();
}, 5000);
