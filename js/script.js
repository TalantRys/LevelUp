// SLIDER SWIPER
var swiper = new Swiper('.swiper-box', {
    // configure Swiper to use modules
    slidesPerView: 3,
    spaceBetween: 40,
    slidesPerGroup: 3,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoHeight: true,
    breakpoints: {
        1:{
            spaceBetween: 20,
            slidesPerView: 1,
            slidesPerGroup: 1,
        },
        575:{
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
        830:{
            slidesPerView:3,
            slidesPerGroup: 3,
        },
    }
});
// БУРГЕР
const burger = document.querySelector('header .header__burger');
const burgerBody = document.querySelector('body');
const list = document.querySelector('header .header__list');
burger.addEventListener('click', function(){
    burgerBody.classList.toggle('lock');
    burger.classList.toggle('close');
    list.classList.toggle('burger-active');
});
const listLink = document.querySelectorAll('.header__list .header__link');
listLink.forEach((link)=> {
    link.addEventListener('click', function () {
        burgerBody.classList.remove('lock');
        burger.classList.remove('close');
        list.classList.remove('burger-active');
    });
});

// ФОРМА
const form = document.forms['form'];
const button = form.elements['form-submit'];
const inputArr = Array.from(form);
const validInputArr = [];

inputArr.forEach((el) => {
    if (el.hasAttribute('data-reg')) {
        el.setAttribute('is-valid', '0');
        validInputArr.push(el);
    }
})

console.log(validInputArr);

form.addEventListener('input', inputHandler);
button.addEventListener('click', buttonHandler);
function inputHandler({target}) {
    if (target.hasAttribute("data-reg")){
        inputCheck(target);
    }
}
function inputCheck(el){
    const inputValue = el.value;
    const inputReg = el.getAttribute('data-reg');
    const reg = new RegExp(inputReg);
    if (reg.test(inputValue)) {
        el.style.border = "3px solid green"
        el.setAttribute('is-valid', '1');
    }
    else{
        el.style.border = "3px solid red"
        el.setAttribute('is-valid', '0');
    }
}
function buttonHandler(e){
    const isValidArr = [];
    validInputArr.forEach((el) =>{
        isValidArr.push(el.getAttribute('is-valid'));
    });
    const isValid = isValidArr.reduce((acc, current) => {
        return acc && current;
    });
    console.log(isValid);
    if (!Boolean(Number(isValid))) {
        e.preventDefault();
        alert('Введите ваше имя и номер телефона');
    }
}