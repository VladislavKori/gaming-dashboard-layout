// Menu Open Full Menu
let menu = document.querySelector('.menu');
let btn = document.querySelector('#menu__btn-open');
let section__name = document.querySelectorAll('.menu_section__name');

btn.addEventListener('click', e => {

    console.log(menu.classList.contains('menu__active'))

    if (menu.classList.contains('menu__active')) {
        menu.classList.remove('menu__active')
        moveMenu('close') 
    } else {
        menu.classList.add('menu__active') 
        moveMenu('open')
    }

})

function moveMenu(prop) {

    for( let i = 0; i < section__btn.length; i++ ) {

        if (prop === 'close') {
            section__name[i].style.display = 'none'
        } 

        if (prop === 'open') {
            section__name[i].style.display = 'block'
        }

    }
}


// Menu Section Buttom
const section__btn = document.querySelectorAll('.menu__sections>li')
let select__btn;

if (select__btn === undefined) {
    section__btn[0].classList.add('section__active');
    section__btn[0].children[1].style.color = "#fff";
}

for( let i = 0; i < section__btn.length; i++ )
{

    let currentBtn = section__btn[i];
    currentBtn.addEventListener('click', () => {

        resetActiveBtn();
        currentBtn.classList.add('section__active');
        currentBtn.children[1].style.color = "#fff";
        select__btn = i;

    })

}

function resetActiveBtn() {
    for (let i = 0; i < section__btn.length; i++ )
    {
        section__btn[i].classList.remove('section__active');
        section__btn[i].children[1].style.color = "#22283C"
    }
}