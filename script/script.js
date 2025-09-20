let sections = document.querySelectorAll("section[id]");
window.addEventListener("scroll", navHighlighter);
function navHighlighter() {
  let scrollY = window.scrollY;
  sections.forEach(current => {
    let sectionHeight = current.offsetHeight;
    let sectionTop = current.offsetTop - 300;    
    let sectionId = current.getAttribute("id");
    if (
      scrollY > sectionTop &&
      scrollY <= sectionTop + sectionHeight
    ){
      document.querySelector("header nav a[href*="+ sectionId  + "]").classList.add("active-link");
    } else {
      document.querySelector("header nav a[href*="+ sectionId  + "]").classList.remove("active-link");
    }
  });
}

setTimeout(function(){
	document.body.classList.add('body_visible');
}, 0);

function onEntry(entry) {
	entry.forEach(change => {
	  if (change.isIntersecting) {
		change.target.classList.add('element-show');
	  }
	});
  }
  let options = { threshold: [0.4] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.element-animation');
  for (let elm of elements) {
	observer.observe(elm);
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
  document.querySelector('.year').textContent = currentYear;
  // console.log(document.getElementById('year'));
  
}
setInterval(updateDateTime, 1000);

// function showBurger(){
//     const burgerNav = document.getElementById("burgerNav");
//    document.getElementById("burgerNav").classList.toggle("active");
//     document.body.style.overflowY = 'hidden';
// }

// function closeBurgerNav(){
//   document.getElementById("burgerNav").classList.remove("active");
// }

  const burgerBtn = document.getElementById("burgerBtn");
  const burgerNav = document.getElementById("burgerNav");

function closeNav(){
      burgerNav.classList.toggle("active");
      document.body.classList.toggle("no-scroll");
      document.querySelector("header").classList.toggle("fixed");

}

document.addEventListener("DOMContentLoaded", () => {
  if (burgerBtn && burgerNav) {
    burgerBtn.addEventListener("click", () => {
    burgerNav.classList.toggle("active");
    document.body.classList.toggle("no-scroll");
    document.querySelector("header").classList.toggle("fixed");
  })
  }

    if (burgerNav.classList === "burger-nav active") {
    document.body.style.overflowY = 'hidden';
  } else {
    	  document.body.style.overflowY = 'visible';
  }
});