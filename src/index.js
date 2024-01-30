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

function addFadeInOut(element) {
    element.classList.add("fadeIn", "fadeOut")

    requestAnimationFrame(() => {
        element.classList.remove("fadeOut")
    })
}

homeBtn.addEventListener("click", () => {
    removeAllChildNodes(content)
    addFadeInOut(home)
    content.appendChild(home)
})

menuBtn.addEventListener("click", () => {
    removeAllChildNodes(content)
    addFadeInOut(menu)
    content.appendChild(menu)
})

contactBtn.addEventListener("click", () => {
    removeAllChildNodes(content)
    addFadeInOut(contact)
    content.appendChild(contact)
})





