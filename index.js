const btn = document.querySelector('.btn');
const search = document.querySelector('.search');
const input = document.querySelector('.input');
const secondBtnClick = document.querySelector('#secondBtnClick');
btn.addEventListener('click', () => {
    search.classList.add('active');
    input.focus();
})


