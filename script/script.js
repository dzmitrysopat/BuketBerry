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

const swiper = new Swiper('.swiper .mySwiper', {
  // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

    autoplay: {
        delay: 5000,
    },
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
});

function man(){
    document.getElementById("man").classList.add("active");
    document.getElementById("woman").classList.remove("active");
    document.getElementById("baby").classList.remove("active");
    document.getElementById("oldFruits").classList.remove("active");
    document.getElementById("premium").classList.remove("active");

    document.getElementById("manItems").classList.remove("hidden");
    document.getElementById("womanItems").classList.add("hidden");
    document.getElementById("babyItems").classList.add("hidden");
    document.getElementById("oldFruitsItems").classList.add("hidden");
    document.getElementById("premiumItems").classList.add("hidden");

}

function woman(){
    document.getElementById("man").classList.remove("active");
    document.getElementById("woman").classList.add("active");
    document.getElementById("baby").classList.remove("active");
    document.getElementById("oldFruits").classList.remove("active");
    document.getElementById("premium").classList.remove("active");

    document.getElementById("manItems").classList.add("hidden");
    document.getElementById("womanItems").classList.remove("hidden");
    document.getElementById("babyItems").classList.add("hidden");
    document.getElementById("oldFruitsItems").classList.add("hidden");
    document.getElementById("premiumItems").classList.add("hidden");
}

function baby(){
    document.getElementById("man").classList.remove("active");
    document.getElementById("woman").classList.remove("active");
    document.getElementById("baby").classList.add("active");
    document.getElementById("oldFruits").classList.remove("active");
    document.getElementById("premium").classList.remove("active");

    document.getElementById("manItems").classList.add("hidden");
    document.getElementById("womanItems").classList.add("hidden");
    document.getElementById("babyItems").classList.remove("hidden");
    document.getElementById("oldFruitsItems").classList.add("hidden");
    document.getElementById("premiumItems").classList.add("hidden");
}

function oldFruits(){
    document.getElementById("man").classList.remove("active");
    document.getElementById("woman").classList.remove("active");
    document.getElementById("baby").classList.remove("active");
    document.getElementById("oldFruits").classList.add("active");    
    document.getElementById("premium").classList.remove("active");

    document.getElementById("manItems").classList.add("hidden");
    document.getElementById("womanItems").classList.add("hidden");
    document.getElementById("babyItems").classList.add("hidden");
    document.getElementById("oldFruitsItems").classList.remove("hidden");
    document.getElementById("premiumItems").classList.add("hidden");
}

function premium(){
    document.getElementById("man").classList.remove("active");
    document.getElementById("woman").classList.remove("active");
    document.getElementById("baby").classList.remove("active");
    document.getElementById("oldFruits").classList.remove("active");
    document.getElementById("premium").classList.add("active");

    document.getElementById("manItems").classList.add("hidden");
    document.getElementById("womanItems").classList.add("hidden");
    document.getElementById("babyItems").classList.add("hidden");
    document.getElementById("oldFruitsItems").classList.add("hidden");
    document.getElementById("premiumItems").classList.remove("hidden");
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
