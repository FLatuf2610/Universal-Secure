const btn = document.querySelector('.btn-menu');
const bars = document.querySelector('.fa-solid.fa-bars');
const x = document.querySelector('.fa-regular.fa-x');
const menu = document.getElementById('menu');
const link = document.querySelectorAll('.link');

btn.addEventListener('click', () => {
    menu.classList.toggle('active');
    bars.classList.toggle('disabled');
    x.classList.toggle('enabled');
})


link.forEach(l => {
    l.addEventListener('click', () => {
        menu.classList.toggle('active');
        bars.classList.toggle('disabled');
        x.classList.toggle('enabled');
    })
});

const accordions = document.querySelectorAll('.accordion');
accordions.forEach(accordion => {
    accordion.addEventListener('click', () => {
        accordion.classList.toggle('showed')
    })
});
