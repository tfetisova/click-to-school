<<<<<<< HEAD
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
=======
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('4 x=j(){4 8=5.10(\'W\');8.3.9(\'n-m-8\');5.E.B(8);4 y=5.2(\'.J .7.1\').Z();y.3.9(\'n-m-Y\');l(5.2(\'.n-m-8\')){4 8=5.2(\'.n-m-8\');V.M(\'8\',8);8.B(y);8.d(\'c\',(e)=>{8.a()})}};j s(0){0.Q(\'c\',x);0.d(\'c\',x)}j I(b){4 0=b.2(\'.7.1\');s(0);4 k=b.2(\'.k\');4 i=b.2(\'.i\');k.d(\'c\',(e)=>{4 0=b.2(\'.7.1\');l(0.g){0.3.a(\'1\');0.g.3.9(\'1\');i.3.a(\'u\')}L{k.3.9(\'u\')}s(b.2(\'.7.1\'))});i.d(\'c\',(e)=>{4 0=b.2(\'.7.1\');l(0.h){0.3.a(\'1\');0.h.3.9(\'1\');k.3.a(\'u\')}L{i.3.9(\'u\')}s(b.2(\'.7.1\'))})}4 b=5.2(\'.J .6.1\');I(b);4 F=5.2(\'.r-t-v\');4 q=5.2(\'.r-t-N\');F.d(\'c\',()=>{q.3.9(\'1\')});5.E.d(\'c\',(e)=>{l(!e.D.3.w(\'r-t-v\')&&!e.D.3.w(\'r-t-v-U\')){l(q.3.w(\'1\')){q.3.a(\'1\')}}});j p(0){0.g.3.9(\'o-1\');0.h.3.9(\'o-1\')};j z(0){0.g.3.a(\'o-1\');0.h.3.a(\'o-1\')}4 6=5.2(\'#f-6\');4 0=5.2(\'#f-6 .7.1\');p(0);4 H=5.2(\'.6>.P\');4 K=5.2(\'.6>.R\');H.d(\'c\',(e)=>{4 0=5.2(\'#f-6 .7.1\');0.h.3.9(\'1\');0.3.a(\'1\');z(0);p(5.2(\'#f-6 .7.1\'));4 A=5.2(\'#f-6>.7:S-C\');6.T(A)});K.d(\'c\',(e)=>{4 0=5.2(\'#f-6 .7.1\');0.g.3.9(\'1\');0.3.a(\'1\');z(0);p(5.2(\'#f-6 .7.1\'));4 G=5.2(\'#f-6>.7:X-C\');6.O(G)})',62,63,'activeSlide|active|querySelector|classList|const|document|slider|slide|bg|add|remove|docActiveSlider|click|addEventListener||news|previousElementSibling|nextElementSibling|next|function|prev|if|doc|show|near|sliderBuild|burgerMenu|header|showActiveSlide|menu__burger|disabled|btn|contains|bigDocListener|bigDoc|clearNearActive|firstSlide|appendChild|child|target|body|burgerMenuBtn|lastSlide|leftArrow|docSliderNavigation|documents|rightArrow|else|log|menu|prepend|arrow__left|removeEventListener|arrow__right|first|append|letters|console|div|last|big|cloneNode|createElement'.split('|'),0,{}))
>>>>>>> e17483583944619ae1471f980838348881ab504d
