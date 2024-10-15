// Получаем элементы бургер-меню и навигацию
const burgerMenu = document.querySelector('.burger-menu');
const burgerIcon = document.querySelector('.burger-icon');
const navbar = document.querySelector('.navbar');
const body = document.body;

// Функция для переключения состояния бургер-меню
const toggleMenu = () => {
  navbar.classList.toggle('active');
  body.classList.toggle('no-scroll');  // Блокируем прокрутку
  // Меняем иконку бургер-меню
  if (navbar.classList.contains('active')) {
    burgerIcon.innerHTML = '&times;';  // Показываем крестик
  } else {
    burgerIcon.innerHTML = '&#9776;';  // Показываем бургер-иконку
  }
};

// Открытие и закрытие бургер-меню по клику на иконку
burgerMenu.addEventListener('click', toggleMenu);

// Закрытие меню при клике на любой пункт меню
navbar.addEventListener('click', (event) => {
  if (event.target.tagName === 'A') {
    navbar.classList.remove('active');
    burgerIcon.innerHTML = '&#9776;';  // Вернуть бургер-иконку
    body.classList.remove('no-scroll');  // Разблокируем прокрутку
  }
});

// Закрытие меню при клике вне навигации
document.addEventListener('click', (event) => {
  if (!navbar.contains(event.target) && !burgerMenu.contains(event.target)) {
    navbar.classList.remove('active');
    burgerIcon.innerHTML = '&#9776;';  // Вернуть бургер-иконку
    body.classList.remove('no-scroll');  // Разблокируем прокрутку
  }
});