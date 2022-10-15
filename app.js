document.addEventListener('DOMContentLoaded', function(){
    iniciarAPP();
 });

 function iniciarAPP() {
    scrollNav();
}

window.onscroll = () => {
    myFunction();
}

// Mantener la navegacion con sticky en la parte superior al hacer scroll

const mainNavigation = document.querySelector('.main-navigation');

const sticky = mainNavigation.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        mainNavigation.classList.add("sticky")
    } else {
        mainNavigation.classList.remove("sticky");
    }
  }

  let parallaxImage = document.getElementById("ParallaxImage");
  let parallaxContent = document.getElementById("ParallaxContent");
  let windowScrolled;

  window.addEventListener("scroll", function windowScroll() {
    windowScrolled = window.pageYOffset || document.documentElement.scrollTop;

    parallaxImage.style.transform =
        "translate3d(0, " + windowScrolled / 4 + "px, 0)";

    parallaxContent.style.transform =
        "translate3d(0, " + windowScrolled / 2 + "px, 0)";
  })


// haciendo scroll con la navegacion para visitar las secciones

  function scrollNav() {
    const enlaces = document.querySelectorAll('.main-navigation a');

    enlaces.forEach( enlace => {
        enlace.addEventListener('click', function(e) {
            e.preventDefault();
            const seccionScroll = e.target.attributes.href.value;
            const seccion = document.querySelector(seccionScroll);
            seccion.scrollIntoView({ behavior: "smooth"});
        });
    });
}



