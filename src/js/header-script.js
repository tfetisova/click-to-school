const burgerMenuBtn = document.querySelector('.header-menu__burger-btn');
const burgerMenu = document.querySelector('.header-menu__burger-menu');
burgerMenuBtn.addEventListener('click', ()=>{
  burgerMenu.classList.add('active');
});
document.body.addEventListener('click',(e)=>{
  if(!e.target.classList.contains('header-menu__burger-menu') || !e.target.classList.contains('header-menu__burger-btn') ){
    if(burgerMenu.classList.contains('active')){
      burgerMenu.classList.remove('active')
    }
  }
});

