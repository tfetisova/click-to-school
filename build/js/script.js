const input = document.querySelector('.select-input');
const contactBlock = document.querySelector('.contact-us');
const listForContact = document.querySelector('.contact-list');
const listPoints = document.querySelectorAll('.point');
const tel = document.querySelector('.tel');

contactBlock.addEventListener('click',(e)=>{
    if(e.target === input && !listForContact.classList.contains('active')){
        listForContact.classList.add('active');
    } else {
        listForContact.classList.remove('active');
    }})

listForContact.addEventListener('click', (e)=>{
    listForContact.classList.remove('active');
    let selectResult = e.target.innerText;
        input.value = selectResult;
        switch (e.target){
            case listPoints[0]:
                // listForContact.classList.remove('active');
                tel.classList.add('active');
                tel.textContent = '+38 044 242 27 01';
                break;
            case listPoints[1]:
                tel.classList.add('active');
                tel.textContent = '+38 044 242 27 01';
                break;
            case listPoints[2]:
                tel.classList.add('active');
                tel.textContent = '+38 044 242 09 97';
                break;
            case listPoints[3]:
                tel.classList.add('active');
                tel.textContent = '+38 044 242 09 97';
                break;
            case listPoints[4]:
                tel.classList.add('active');
                tel.textContent = '+38 044 242 09 97';
                break;
            case listPoints[5]:
                tel.classList.add('active');
                tel.textContent = '+38 044 242 27 01';
                break;
            case listPoints[6]:
                tel.classList.add('active');
                tel.textContent = '+38 044 242 09 97';
                break;
        }
    })    

const burgerMenuBtn = document.querySelector('.header-menu__burger-btn');
const burgerMenu = document.querySelector('.header-menu__burger-menu');
burgerMenuBtn.addEventListener('click', ()=>{
  burgerMenu.classList.add('active');
});
document.body.addEventListener('click',(e)=>{
  if(!e.target.classList.contains('header-menu__burger-btn') && !e.target.classList.contains('header-menu__burger-btn-letters')){
    if(burgerMenu.classList.contains('active')){
      burgerMenu.classList.remove('active')
    }
  }
});


function sliderBuild(activeSlide) {
  activeSlide.previousElementSibling.classList.add('near-active');
  activeSlide.nextElementSibling.classList.add('near-active');
};
function clearNearActive(activeSlide) {
  activeSlide.previousElementSibling.classList.remove('near-active');
  activeSlide.nextElementSibling.classList.remove('near-active');
}
const slider = document.querySelector('#news-slider');
const activeSlide = document.querySelector('#news-slider .slide.active');
sliderBuild(activeSlide);
const leftArrow = document.querySelector('.slider>.arrow__left');
const rightArrow = document.querySelector('.slider>.arrow__right');
leftArrow.addEventListener('click',(e)=>{

  const activeSlide = document.querySelector('#news-slider .slide.active');
  activeSlide.nextElementSibling.classList.add('active');
  activeSlide.classList.remove('active');
  clearNearActive(activeSlide);
  sliderBuild(document.querySelector('#news-slider .slide.active'));
  const firstSlide = document.querySelector('#news-slider>.slide:first-child');
  slider.append(firstSlide);
});
rightArrow.addEventListener('click',(e)=>{
  const activeSlide = document.querySelector('#news-slider .slide.active');
  activeSlide.previousElementSibling.classList.add('active');
  activeSlide.classList.remove('active');
  clearNearActive(activeSlide);
  sliderBuild(document.querySelector('#news-slider .slide.active'));
  const lastSlide = document.querySelector('#news-slider>.slide:last-child');
  slider.prepend(lastSlide);
  })
