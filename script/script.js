let sections = document.querySelectorAll("section[id]");
window.addEventListener("scroll", navHighlighter);
function navHighlighter() {
  let scrollY = window.scrollY;
  sections.forEach(current => {
    let sectionHeight = current.offsetHeight;
    let sectionTop = current.offsetTop - 350;    
    let sectionId = current.getAttribute("id");
    if (
      scrollY > sectionTop &&
      scrollY <= sectionTop + sectionHeight
    ){
      document.querySelector("header nav a[href*="+ sectionId + "-anchor" + "]").classList.add("active-link");
    } else {
      document.querySelector("header nav a[href*="+ sectionId + "-anchor" + "]").classList.remove("active-link");
    }
  });
}

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

function updateDateTime() {
    const date = new Date();
    const yearOption = { year: 'numeric' };        
    const currentYear = date.toLocaleString('ru-RU', yearOption);                

    document.getElementById('year').textContent = currentYear;
}
setInterval(updateDateTime, 1000);

function showBurger(){
  document.getElementById("burgerNav").style.display == "block";
}

function closeBurgerNav(){
  document.getElementById("burgerNav").style.display == "none";
}