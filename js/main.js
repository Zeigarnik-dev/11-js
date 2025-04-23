'use strict';
const modal = document.querySelector('.modal_c'),
openbtn = document.querySelector('.open_m'),
closebtn = document.querySelector('.close_m');

setTimeout(()=>{
    modal.classList.add('active')
}, 3000)

openbtn.addEventListener('click', ()=>{
    modal.classList.add('active')
})

closebtn.addEventListener('click', ()=>{
    modal.classList.remove('active')
})

const tabs = Array.from(document.querySelectorAll('.tab')),
content = Array.from(document.querySelectorAll('.content'));
tabs.forEach((tab, ind)=>{
    tab.addEventListener('click', ()=>{
        document.querySelector('.tab.active').classList.remove('active')
        tab.classList.add('active')
        document.querySelector('.content.active').classList.remove('active')
        content[ind].classList.add('active')
    })
})