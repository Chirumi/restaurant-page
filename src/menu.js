function menu() {
    const menuContent = document.createElement("div")

    const foodOne = document.createElement("div")
    foodOne.textContent = "Gourmet Beef 1: Best burger 1"

    menuContent.appendChild(foodOne)

    return menuContent
}

export default menu()