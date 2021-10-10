const isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.iOS() ||
      isMobile.Opera() ||
      isMobile.Windows());
  }
};

if (isMobile.any()) {
  document.body.classList.add('_touch');

} else {
  document.body.classList.add('_pc');
}


const iconMenu = document.querySelector(".burger");
const menu = document.querySelector(".menu");
const phone = document.querySelector(".header__phone");
const logo = document.querySelector(".header__logo");
const socialMobile = document.querySelector(".header__social-mobile");

if (iconMenu) {
  iconMenu.addEventListener("click", function (e) {
    document.body.classList.toggle("lock");
    iconMenu.classList.toggle("active");
    menu.classList.toggle("active");
    phone.classList.toggle("active");
    logo.classList.toggle("active");
    socialMobile.classList.toggle("active");
  });
}