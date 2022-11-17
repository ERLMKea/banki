out("im in attributes")

const img = document.getElementById('logo')
out(img.src)
out(img.getAttribute('src'))

img.setAttribute('erik', 'hej')
out(img.getAttribute('erik'))

for(const a of img.attributes) {
    out(a.name, a.value)
}

