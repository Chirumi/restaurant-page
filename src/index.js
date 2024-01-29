import home from "./home.js"
import "./styles/styles.css"
import menu from "./menu.js"
import contact from "./contact.js"

const content = document.getElementById("content")
const homeBtn = document.querySelector(".homeBtn")
const menuBtn = document.querySelector(".menuBtn")
const contactBtn = document.querySelector(".contactBtn")

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild)
    }
}

homeBtn.addEventListener("click", () => {
    removeAllChildNodes(content)

    home.classList.add("fadeOut")

    requestAnimationFrame(() => {
        home.classList.remove("fadeOut")
    })

    content.appendChild(home)
})

menuBtn.addEventListener("click", () => {
    removeAllChildNodes(content)

    menu.classList.add("fadeIn", "fadeOut")

    requestAnimationFrame(() => {
        menu.classList.remove("fadeOut")
    })

    content.appendChild(menu)
})

contactBtn.addEventListener("click", () => {
    removeAllChildNodes(content)
})




