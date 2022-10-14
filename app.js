window.onscroll = () => {
    myFunction();
}

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


//   window.addEventListener('load', function() {
//     new Glider(document.querySelector('.main-carousel'), {
//         slidesToShow: 'auto',
//         slidesToScroll: 1,
//         draggable: true,
//         itemWidth: 700,
//         exactWidth:true,
//         dragVelocity: 1,
//         scrollLock:true,
//         scrollLockDelay:10,
//         focusAt:'center',
//         rewind:true,
//         duration: 3,
//         scrollPropagate:true,
//     });           
// });



