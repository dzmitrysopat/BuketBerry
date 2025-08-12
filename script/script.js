let articles = document.querySelectorAll("article[id]");
window.addEventListener("scroll", navHighlighter);
function navHighlighter() {
  let scrollY = window.scrollY;
  articles.forEach(current => {
    let articleHeight = current.offsetHeight;
    let articleTop = current.offsetTop - 350;    
    let articleId = current.getAttribute("id");
    if (
      scrollY > articleTop &&
      scrollY <= articleTop + articleHeight
    ){
      document.querySelector("header nav a[href*="+ articleId + "-anchor" + "]").classList.add("active-link");
      document.querySelector("header nav div a[href*="+articleId +"]").classList.add("active-link");
    } else {
      document.querySelector("header nav a[href*="+ articleId + "-anchor" + "]").classList.remove("active-link");
      document.querySelector("header nav div a[href*="+articleId +"]").classList.remove("active-link");
    }
  });
}

const swiper = new Swiper('.swiper', {
  // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 4,
    spaceBetween: 30,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },

    autoplay: {
        delay: 5000,
    },
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
});

function show(){
    document.getElementById("man").classList.remove("active");
    document.getElementById("woman").classList.add("active");
    document.querySelector('.man').classList.add("hide");
    document.querySelector('.woman').classList.remove("hide");
}

function hide(){
    document.getElementById("man").classList.add("active");
    document.getElementById("woman").classList.remove("active");
    document.querySelector('.man').classList.remove("hide");
    document.querySelector('.woman').classList.add("hide");
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active-question");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}