out("im in scrolling")

const pbGetScrolling = document.querySelector(".pbGetScroll")
const inpScrolling = document.getElementById("inpScrolling")
const section3 = document.querySelector("#section--3")

function doScrolling(evt, scroll) {
    const s3coords = section.getBoundingClientRect();
    out(s3coords)
    
}

pbGetScrolling.addEventListener('click', btn => doScrolling(btn, inpScrolling.value))