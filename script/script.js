const swiper = new Swiper('.swiper', {
  // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
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