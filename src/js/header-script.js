const burgerMenuBtn = document.querySelector('.header-menu__burger-btn');
const burgerMenu = document.querySelector('.header-menu__burger-menu');
burgerMenuBtn.addEventListener('click', ()=>{
  burgerMenu.classList.add('active');
});
document.body.addEventListener('click',(e)=>{
  console.log(e.target);
  if(!e.target.classList.contains('header-menu__burger-btn') && !e.target.classList.contains('header-menu__burger-btn-letters')){
    if(burgerMenu.classList.contains('active')){
      burgerMenu.classList.remove('active')
    }
  }
});

