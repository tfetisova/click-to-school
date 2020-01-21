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
