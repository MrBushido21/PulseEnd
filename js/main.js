
//================================================================================================================================================
//-----------------TEXT---------------\
const menu = document.querySelector('.header__menu');
const burger = document.querySelector('.burger');
document.body

burger.addEventListener('click', function() {
menu.classList.toggle('active');
burger.classList.toggle('active');
document.body.classList.toggle('lock');
})
//================================================================================================================================================
//-----------------TEXT---------------\
const interactive = document.querySelector('.interactive');
const itemBlock = document.querySelector('.header__item-block-1');

interactive.addEventListener('click', function(event) {
  itemBlock.classList.toggle('active');
  interactive.classList.toggle('active');
  event.preventDefault();
  event.stopPropagation();
})

document.addEventListener('click', function(event) {
  if (event.target === itemBlock || event.target.closest('.header__item-block-1')) { 
  } else {
    itemBlock.classList.remove('active');
    interactive.classList.remove('active');
  }
});

//================================================================================================================================================
//-----------------TEXT---------------\
const buttonPassL = document.querySelector('.header__input-pass');
const buttonPassR = document.querySelector('.header__input-pass-reg');
const inputPassL= document.querySelector('.pass-l');
const inputPassR = document.querySelector('.pass-r');

buttonPassL.addEventListener('click', function() {
  if (inputPassL.type === "password") {
    inputPassL.type = "text"
  } else {
    inputPassL.type = "password"
  }
})
buttonPassR.addEventListener('click', function() {
  if (inputPassR.type === "password") {
    inputPassR.type = "text"
  } else {
    inputPassR.type = "password"
  }
})

//================================================================================================================================================
//-----------------TEXT---------------\
const buttonLogin = document.querySelector('.header__button-login');
const blockLogin = document.querySelector('.header__button-block-login');

buttonLogin.addEventListener('click', function(event) {
  blockLogin.classList.toggle('active');
  event.stopPropagation();
})

document.addEventListener('click', function(event) {
  if (event.target.closest('.header__button-form-login')) { 
  } else {
    blockLogin.classList.remove('active');
  }  
});
//================================================================================================================================================
//-----------------TEXT---------------\
const buttonRegister = document.querySelector('.header__button-register');
const popupRegister = document.querySelector('.header__button-block-register');
const formRegister = document.querySelector('.header__button-form-register');
const closeRegister = document.querySelector('.header__form-close');

buttonRegister.addEventListener('click', function(event) {
  popupRegister.classList.toggle('active');
  formRegister.classList.add('active');
  event.stopPropagation();
})

closeRegister.addEventListener('click', function(event) {
  popupRegister.classList.remove('active');
})

document.addEventListener('click', function(event) {
  if (event.target === popupRegister) {
    popupRegister.classList.remove('active');
    formRegister.classList.remove('active');
  }
});
//================================================================================================================================================
//-----------------TEXT---------------\

const marketingButton = document.querySelector('.marketing__button');
const imgFirst = document.querySelectorAll('.first');
const imgSeconde = document.querySelectorAll('.seconde');
const imgThird = document.querySelectorAll('.third');
let clickCount = 0; // Змінна для відстеження кількості натискань на кнопку

marketingButton.addEventListener('click', function() {
  clickCount++; // Збільшуємо лічильник кількості натискань на кнопку
  if (clickCount === 1) {
    imgFirst.forEach(first => {
      first.classList.add('active');
    });
  } else if (clickCount === 2) {
    imgSeconde.forEach(seconde => {
      seconde.classList.add('active');
    });
  } else if (clickCount === 3) {
    imgThird.forEach(third => {
      third.classList.add('active');
      marketingButton.style.display = "none"
    });
  }
});
//================================================================================================================================================
//-----------------TEXT---------------\

const acardeonName = document.querySelectorAll('.faq__item-name');
const acardeonText = document.querySelectorAll('.faq__item-text');

acardeonName.forEach(function(name) {
  name.addEventListener('click', function() {
    var parentItem = this.closest('.faq__item');
    var text = parentItem.querySelector('.faq__item-text');
    var isActive = text.classList.contains('active');
    acardeonText.forEach(function(text) {
      text.classList.remove('active');
    });
    acardeonName.forEach(function(name) {
      name.classList.remove('active');
    });
    if (!isActive) {
      text.classList.add('active');
      name.classList.add('active');
    }
  });
});