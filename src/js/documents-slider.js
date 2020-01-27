const bigDocListener = function () {
  const bg = document.createElement('div');
  bg.classList.add('show-doc-bg');
  document.body.appendChild(bg);
  const bigDoc = document.querySelector('.documents .slide.active').cloneNode();
  bigDoc.classList.add('show-doc-big');
  if(document.querySelector('.show-doc-bg')){
    const bg = document.querySelector('.show-doc-bg');
    console.log('bg',bg);
    bg.appendChild(bigDoc);
    bg.addEventListener('click',(e)=>{
      bg.remove();
    })
  }
};
function showActiveSlide(activeSlide) {
  activeSlide.removeEventListener('click',bigDocListener);
  activeSlide.addEventListener('click',bigDocListener);
}

function docSliderNavigation(docActiveSlider) {
  const activeSlide = docActiveSlider.querySelector('.slide.active');
  showActiveSlide(activeSlide);
  const prev = docActiveSlider.querySelector('.prev');
  const next = docActiveSlider.querySelector('.next');
  prev.addEventListener('click',(e)=>{
    const activeSlide = docActiveSlider.querySelector('.slide.active');
    if(activeSlide.previousElementSibling){
      activeSlide.classList.remove('active');
      activeSlide.previousElementSibling.classList.add('active');
      next.classList.remove('disabled');
    }else{
      prev.classList.add('disabled')
    }
    showActiveSlide(docActiveSlider.querySelector('.slide.active'));
  });
  next.addEventListener('click',(e)=>{
    const activeSlide = docActiveSlider.querySelector('.slide.active');
    if(activeSlide.nextElementSibling){
      activeSlide.classList.remove('active');
      activeSlide.nextElementSibling.classList.add('active');
      prev.classList.remove('disabled');
    }else{
      next.classList.add('disabled')
    }
    showActiveSlide(docActiveSlider.querySelector('.slide.active'));
  });
}
const docActiveSlider = document.querySelector('.documents .slider.active');
docSliderNavigation(docActiveSlider);