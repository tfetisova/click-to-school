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
