const burger = document.querySelector('.burger-menu');
const navContent = document.querySelector('.topnav__content');
const menu = document.querySelector('.topnav__links');
const topnavContacts = document.querySelector('.topnav__contacts');

export const toggleBurger = () => {
  burger.addEventListener('click',()=>{
    burger.classList.toggle('open');
    menu.classList.toggle('topnav__links_opened');
  })
}

export const getCoordsTopnav = ()=> {
  window.addEventListener('scroll', ()=> {
    let topPosition = navContent.getBoundingClientRect().y;
    if(topPosition === 0) {
      topnavContacts.classList.add('topnav__contacts_active');
    } else {
      topnavContacts.classList.remove('topnav__contacts_active');
    }
  })
}

export const deviceWidth = ()=> {
  let width = Math.max(window.screen.width, window.innerWidth);
  if( 768 <= width || width >= 992) {
    console.log('asdfasdf')
    getCoordsTopnav();
  }
}
