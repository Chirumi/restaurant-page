import home from "./home.js"
import "./styles/styles.css"

const menuBtn = document.querySelector(".menuBtn")

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild)
    }
}

menuBtn.addEventListener("click", () => {
    removeAllChildNodes(content)
})


