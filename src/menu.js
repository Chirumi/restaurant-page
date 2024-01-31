import menuBurgerOne from "../src/photos/pexels-ata-ebem-10560076.jpg"
import menuBurgerTwo from "../src/photos/pexels-valeriya-kobzar-17322389.jpg"
import menuBurgerThree from "../src/photos/pexels-arjunn-la-19055681.jpg"
import menuBurgerFour from "../src/photos/pexels-vilnis-husko-13573666.jpg"

function menu() {
    const menuContent = document.createElement("div")
    menuContent.classList.add("menuContent")

    const itemOne = createMenuItem(menuBurgerOne, "Chicken Burger", "Grilled chicken breast, toasted brioche buns, topped with our specialty mayonnaise")
    const itemTwo = createMenuItem(menuBurgerTwo, "Chicken Strip Burger", "Crispy chicken strips, toasted brioche buns, topped with our specialty mayonnaise ")
    const itemThree = createMenuItem(menuBurgerThree, "Beef Burger", "Juicy grilled beef patty, toasted brioche buns, yopped with our famous sauce")
    const itemFour = createMenuItem(menuBurgerFour, "Gourmet Beef Burger", "Juicy grilled beef patty, toasted brioche buns, American cheese, lettuce")

    menuContent.appendChild(itemOne)
    menuContent.appendChild(itemTwo)
    menuContent.appendChild(itemThree)
    menuContent.appendChild(itemFour)
    
    return menuContent
}

function createMenuItem (img, name, description) {
    const itemContainer = document.createElement("div")
    itemContainer.classList.add("menuItem") // Add class to itemcontainers for styling
    const nameDescContainer = document.createElement("div") // separate img and descriptions for styling
    const imgContainer = document.createElement("div")

    const itemImg = document.createElement("img")
    itemImg.src = img

    const itemName = document.createElement("div")
    itemName.classList.add("itemName")
    itemName.textContent = name

    const itemDesc = document.createElement("em") 
    itemDesc.classList.add("itemDesc")
    itemDesc.textContent = description

    nameDescContainer.appendChild(itemName)
    nameDescContainer.appendChild(itemDesc)
    imgContainer.appendChild(itemImg)

    itemContainer.appendChild(imgContainer)
    itemContainer.appendChild(nameDescContainer)


    return itemContainer
}

export default menu()