//=========================
// MENU SCROLL
//=========================

const header = document.querySelector("header");

window.addEventListener("scroll", function(){

    if(window.scrollY > 50){
        header.classList.add("header-scroll");
    }else{
        header.classList.remove("header-scroll");
    }

});

//====================================
// DESPLAZAMIENTO SUAVE DEL MENÚ
//====================================

document.querySelectorAll('header a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const destino = document.querySelector(this.getAttribute("href"));

        if(destino){

            destino.scrollIntoView({
                behavior:"smooth"
            });

        }

    });

});

//====================================
// SLIDER HERO
//====================================

const slides = document.querySelectorAll(".slide");

let current = 0;

function mostrarSlide(){

    slides[current].classList.remove("active");

    current++;

    if(current >= slides.length){
        current = 0;
    }

    slides[current].classList.add("active");

}

setInterval(mostrarSlide, 5000);