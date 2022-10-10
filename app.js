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