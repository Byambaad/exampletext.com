
      var swiper = new Swiper(".popular-content", {
        slidesPerView: 1,
        spaceBetween: 10,
        autoplay: {
          delay: 3500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints:{
            280:{
                slidesPerView: 1,
                spaceBetween: 10,
            },
            320:{
                slidesPerView: 2,
                spaceBetween: 10,
            },
            510:{
                slidesPerView: 2,
                spaceBetween: 10,
            },
            758:{
                slidesPerView: 3,
                spaceBetween: 15,
            },
           
        },
      });
    

let formBtn = document.querySelector("#login-btn");
let formBtnn = document.querySelector("#login-btnn");
let formBtnnn = document.querySelector("#login-btnnn"); //medee3


let loginForm = document.querySelector(".login-form-container");
let loginFormm = document.querySelector(".login-form-containe");
let loginFormmm = document.querySelector(".login-form-contain");

let formClose = document.querySelector("#form-close");
let formClosee = document.querySelector("#form-closee");
let formClosea = document.querySelector("#form-closea");



formBtnn.addEventListener('click', () => {
    loginFormm.classList.add("active");

});

formClosee.addEventListener('click', () => {
    loginFormm.classList.remove("active");

});



//medee2
formBtn.addEventListener('click', () => {
    loginForm.classList.add("active");

});

formClose.addEventListener('click', () => {
    loginForm.classList.remove("active");

});


//medee3
formBtnnn.addEventListener('click', () => {
    loginFormmm.classList.add("active");

});

formClosea.addEventListener('click', () => {
    loginFormmm.classList.remove("active");

});


//Readmore
const parentContainer =  document.querySelector('.read-more-container');

parentContainer.addEventListener('click', event=>{

    const current = event.target;

    const isReadMoreBtn = current.className.includes('read-more-btn');

    if(!isReadMoreBtn) return;

    const currentText = event.target.parentNode.querySelector('.read-more-text');

    currentText.classList.toggle('read-more-text--show');

    current.textContent = current.textContent.includes('Дэлгэрэнгүй...') ? "Хураах..." : "Дэлгэрэнгүй...";

})




