import { burger, menu, topnavContacts, navContent, topnav } from "./constants.js";

// Переключает меню бургера
export const toggleBurger = () => {
    burger.classList.toggle('open');
    menu.classList.toggle('topnav__links_opened');
}

const activateTopnavShadow = ()=> {
  topnav.classList.add('topnav_on_shadow');
}

const deactivateTopnavShadow = ()=> {
  topnav.classList.remove('topnav_on_shadow');
}

const activateTopnavContacts = ()=> {
  topnavContacts.classList.add('topnav__contacts_active');
}

const deactivateTopnavContacts = ()=> {
  topnavContacts.classList.remove('topnav__contacts_active');
}

//Активирует тень когда topnav на верху
const handleTopnavTopPosition = ()=> {
  let topPosition = navContent.getBoundingClientRect().y;
    if(topPosition === 0) {
      activateTopnavShadow();
      activateTopnavContacts();
    } else {
      deactivateTopnavShadow();
      deactivateTopnavContacts();
    }
}

// Отображает контакты на ширине 768-992px
export const handeDeviceWidth = ()=> {
  let width = Math.max(window.screen.width, window.innerWidth);
  if( 768 <= width || width >= 992) {
    window.addEventListener('scroll', handleTopnavTopPosition)
  } else {
    window.removeEventListener('scroll', handleTopnavTopPosition)
  }
}
