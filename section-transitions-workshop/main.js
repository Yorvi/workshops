let sections = document.getElementsByTagName("div")
let firstSection = sections[0]
let secondSection = sections[1]
let thirdSection = sections[2]
let lastSection = sections[3]

window.addEventListener("scroll", event => {
    if(window.scrollY > 100) {
        firstSection.classList.add("show")
    }

})