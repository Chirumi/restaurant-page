import home from "./home.js"
import "./styles/styles.css"
import menu from "./menu.js"

const content = document.getElementById("content")
const menuBtn = document.querySelector(".menuBtn")

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild)
    }
}

menuBtn.addEventListener("click", () => {
    removeAllChildNodes(content)
    content.appendChild(menu)
})



