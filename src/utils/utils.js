const burger = document.querySelector('.burger-menu');
const navContent = document.querySelector('.topnav__content');
const menu = document.querySelector('.topnav__links');

export const toggleBurger = () => {
  burger.addEventListener('click',()=>{
    burger.classList.toggle('open');
    menu.classList.toggle('topnav__links_opened');
    navContent.classList.toggle('topnav__content_opened');
  })
}
