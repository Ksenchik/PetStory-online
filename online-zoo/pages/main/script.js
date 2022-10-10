const menuButton = document.querySelector(".header__burger");
const menuButton1 = document.querySelector(".header__menu");
const menuModal = document.querySelector(".header__modal");
const contentBody = document.querySelector("body");

menuButton.onclick = function () {
   menuButton.classList.toggle("active");
   menuButton1.classList.toggle("active");
   menuModal.classList.toggle("active");
   contentBody.classList.toggle("lock");
}
menuButton1.onclick = function () {
   menuButton.classList.remove("active");
   menuButton1.classList.remove("active");
   menuModal.classList.remove("active");
   contentBody.classList.remove("lock");
}
menuModal.onclick = function () {
   menuButton.classList.remove("active");
   menuButton1.classList.remove("active");
   menuModal.classList.remove("active");
   contentBody.classList.remove("lock");
}

// PETS CAROUSEL
const swiper = new Swiper('.pets__slider', {
   navigation: {
      nextEl: '.btn-next',
      prevEl: '.btn-prev'
   },
   spaceBetween: 30,
   slidesPerView: 3,
   slidesPerColumn: 2,
   autoHeight: false,
   grid: {
      rows: 2,      
    },
   loop: true,
   loopedSlides:4,
   breakpoints: {
      320: {
         slidesPerView: 1,
      },
      550: {
         slidesPerView: 2,
      },
      980: {
         slidesPerView: 3,
      }
   },
});

// POPUP
document.querySelector(".testimonials__flex").addEventListener("click", (e) => {
   Popup.show(e)
});

document.querySelector(".popup").addEventListener("click", (e) => {
   Popup.close(e)
});

const Popup = {
   show(e) {
     const card = e.target.closest(".testimonials-card")
     console.log(card)
     if (card) {
       const content = document.querySelector(".popup__content")
       document.querySelector(".popup").classList.add("popup_show")
       content.innerHTML = ""
       content.append(card.cloneNode(true))
     }
   },
 
   close(e) {
     if (!e.target.classList.contains("popup__container")) {
       document.querySelector(".popup").classList.remove("popup_show")
     }
   }
};

// TESTIMONIALS
document.querySelector(".testimonials-range").addEventListener("input", () => {
   Scroller.goto(document.querySelector(".testimonials-range").value)
});

const Scroller = {
   calculateRange() {
     const range = document.querySelector(".testimonials-card")
     range.max = window.innerWidth <= 1000 ? 9 : 8
   },
 
   goto(gapOrder) {
     const offset = (document.querySelector(".testimonials-card").getBoundingClientRect().width + 30) * gapOrder
     document.querySelector(".testimonials-card").style.marginLeft = `-${offset}px`
   }
 }


