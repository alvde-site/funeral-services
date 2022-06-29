const burger = document.querySelector('.burger-menu');

export const toggleBurger = () => {
  burger.addEventListener('click',()=>{
    burger.classList.toggle('open');
  })
}
