out("im in scrolling")

const pbGetScrolling = document.querySelector(".pbGetScroll")
const inpScrolling = document.getElementById("inpScrolling")
const section3 = document.querySelector("#section--3")

function doScrolling(evt, scroll) {
    const s3coords = section3.getBoundingClientRect();
    out(s3coords)
    out(scroll)
    const js1 = JSON.parse(scroll)
    out(js1)
    out(js1.left)
    out(js1.top)

    window.scrollTo({
        left: js1.left,
        top: js1.top,
        behavior: 'smooth'
    })

}

function showViewPort() {
    out("Screen size also called viewport")
    out(document.documentElement.clientHeight, document.documentElement.clientWidth)
}

function sectionScroll(evt, section) {
    if (section == 1) {
        section1.scrollIntoView({behavior:'smooth'})
    }
}



pbGetScrolling.addEventListener('click', btn => doScrolling(btn, inpScrolling.value))
//pbGetScrolling.addEventListener('click', showViewPort)
