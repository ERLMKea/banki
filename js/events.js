out("im in event")
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () => `rgb(${randomInt(0,255)},${randomInt(0,255)},${randomInt(0,255)})`;

out(randomColor());

document.querySelector('.nav__link').addEventListener('click', function (e) {
    this.style.backgroundColor = randomColor();
    e.stopPropagation()
})

document.querySelector('.nav__links').addEventListener('click', function (e) {
    this.style.backgroundColor = randomColor();
})

const navlink = document.querySelector('.nav__link');

document.querySelectorAll('.nav__link').forEach(
    (function (el) {
        el.addEventListener('click', function(e) {
            out('LINK=' + el.innerHTML);
            e.preventDefault();  //forhindrer hopper til anchor.
            const id = this.getAttribute('href');
            out(id);
            document.querySelector(id).scrollIntoView({
                behavior: 'smooth'
            })
        })
    })
)


