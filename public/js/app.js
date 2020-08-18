// selector
const navToggle = document.querySelector('.nav-toggle');
const list = document.querySelector('.container-list');
const closes = document.querySelectorAll('.nav-toggle i');
const body = document.body;
const icon = document.querySelector('div.icon');
const flash = document.querySelector('div.flash');


// eventlistener
navToggle.addEventListener('click', showMenu);

body.addEventListener('click', function (event) {
    if (event.target === icon) {
        flash.style.display = 'none';
    }
})






// function
function showMenu(event) {
    list.classList.toggle('show');
    for (let i = 0; i < closes.length; i++) {
        if (i === 0) {
            closes[i].classList.toggle('close-top');
        }
        if (i === 1) {
            closes[i].classList.toggle('close-center');
        }
        if (i === 2) {
            closes[i].classList.toggle('close-bottom');
        }
    }
}

// CKeaditor
ClassicEditor
    .create(document.querySelector('#editor'))
    .catch(error => {
        console.error(error);
    });

